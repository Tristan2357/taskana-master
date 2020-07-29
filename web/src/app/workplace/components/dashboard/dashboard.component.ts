import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Task } from 'app/workplace/models/task';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkbasketService } from '../../../shared/services/workbasket/workbasket.service';
import { Workbasket } from '../../../shared/models/workbasket';
import { ReportService } from '../../../shared/services/report/report.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly DANGER_MIN = 10;
  readonly WARNING_MIN = 1;

  workbaskets: (Workbasket & { openTasks: Number })[];

  constructor(
    private workbasketService: WorkbasketService,
    private reportService: ReportService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const workbasketObservable = this.workbasketService.getAllWorkBaskets();
    const httpObservable = this.reportService.getWorkbasketReportByDueDate(['READY']);
    forkJoin([workbasketObservable, httpObservable]).subscribe((resultArray) => {
      const { workbaskets } = resultArray[0];
      const { rows } = resultArray[1];
      console.log(rows);
      this.workbaskets = workbaskets.map((workbasket) => {
        console.log(workbasket);
        const task = rows.find((row) => row.desc.find((key) => key === workbasket.name));
        if (!task) return { ...workbasket, openTasks: 0 };
        return { ...workbasket, openTasks: task.total };
      });
    });
  }

  selectClaim(workbasket: Workbasket) {
    this.taskService
      .selectAndClaim(workbasket.workbasketId)
      .pipe(take(1))
      .subscribe((task: Task) => {
        this.router.navigate(['task-processing', task.taskId], { relativeTo: this.route.parent });
      });
  }
}
