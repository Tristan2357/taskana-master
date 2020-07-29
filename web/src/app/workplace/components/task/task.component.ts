import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'app/workplace/models/task';
import { Workbasket } from 'app/shared/models/workbasket';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TaskService } from 'app/workplace/services/task.service';
import { WorkbasketService } from 'app/shared/services/workbasket/workbasket.service';
import { Subscription } from 'rxjs';
import { ClassificationsService } from 'app/shared/services/classifications/classifications.service';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'taskana-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  requestInProgress = false;

  regex = /\${(.*?)}/g;
  address = 'https://bing.com/';
  link: SafeResourceUrl;

  task: Task = null;
  quickMode = false;
  workbaskets: Workbasket[];

  constructor(
    private taskService: TaskService,
    private workbasketService: WorkbasketService,
    private classificationService: ClassificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      const { id } = params;
      this.getTask(id);
    });
    this.quickMode = this.route.snapshot.url[0].path.includes('processing');
  }

  async getTask(id: string) {
    this.requestInProgress = true;
    this.task = await this.taskService.getTask(id).toPromise();
    const classification = await this.classificationService
      .getClassification(this.task.classificationSummary.classificationId)
      .toPromise();
    this.address = this.extractUrl(classification.applicationEntryPoint) || `${this.address}/?q=${this.task.name}`;
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.address);
    this.getWorkbaskets();
    this.requestInProgress = false;
  }

  getWorkbaskets() {
    this.requestInProgress = true;
    this.workbasketService.getAllWorkBaskets().subscribe((workbaskets) => {
      this.requestInProgress = false;
      this.workbaskets = workbaskets.workbaskets;

      const index = this.workbaskets.findIndex((workbasket) => workbasket.name === this.task.workbasketSummary.name);
      if (index !== -1) {
        this.workbaskets.splice(index, 1);
      }
    });
  }

  transferTask(workbasket: Workbasket) {
    this.requestInProgress = true;
    this.taskService.transferTask(this.task.taskId, workbasket.workbasketId).subscribe((task) => {
      this.requestInProgress = false;
      this.task = task;
    });
    this.navigateBack();
  }

  completeTask() {
    this.requestInProgress = true;
    this.taskService.completeTask(this.task.taskId).subscribe((task) => {
      this.requestInProgress = false;
      this.task = task;
      this.taskService.publishUpdatedTask(task);
      if (this.quickMode) {
        this.navigateForward();
      } else {
        this.navigateBack();
      }
    });
  }

  navigateBack() {
    this.taskService
      .cancelClaim(this.task)
      .pipe(take(1))
      .subscribe(() => {
        if (this.quickMode) {
          this.router.navigate(['dashboard'], { relativeTo: this.route.parent });
        } else {
          this.router.navigate([{ outlets: { detail: `taskdetail/${this.task.taskId}` } }], {
            relativeTo: this.route.parent
          });
        }
      });
  }

  private extractUrl(url: string): string {
    const me = this;
    const extractedExpressions = url.match(this.regex);
    if (!extractedExpressions) {
      return url;
    }
    let extractedUrl = url;
    extractedExpressions.forEach((expression) => {
      const parameter = expression.substring(2, expression.length - 1);
      let objectValue: any = me;
      parameter.split('.').forEach((property) => {
        objectValue = this.getReflectiveProperty(objectValue, property);
      });
      extractedUrl = extractedUrl.replace(expression, objectValue);
    });
    return extractedUrl;
  }

  private getReflectiveProperty(scope: any, property: string) {
    return Reflect.get(scope, property);
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private navigateForward() {
    this.taskService
      .selectAndClaim(this.task.workbasketSummary.workbasketId)
      .pipe(take(1))
      .subscribe((task: Task) => {
        this.router.navigate(['task-processing', task.taskId], { relativeTo: this.route.parent });
      });
  }
}
