import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Task } from 'app/workplace/models/task';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkbasketService } from '../../../shared/services/workbasket/workbasket.service';
import { Workbasket } from '../../../shared/models/workbasket';
import { ReportData } from '../../../monitor/models/report-data';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly DANGER_MIN = 10;
  readonly WARNING_MIN = 1;

  workbaskets: (Workbasket & {openTasks: Number})[];

  constructor(private workbasketService: WorkbasketService,
    private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const workbasketObservable = this.workbasketService.getAllWorkBaskets();
    // Does not report correct data?
    const httpObservable = this.http.get<ReportData>(`${environment.taskanaRestUrl}/v1/monitor/tasks-workbasket-report?states=READY`);
    forkJoin([workbasketObservable, httpObservable]).subscribe(resultArray => {
      console.log(resultArray);
      const { workbaskets } = resultArray[0];
      const { rows } = resultArray[1];
      this.workbaskets = workbaskets.map(workbasket => {
        const task = rows.find(row => row.desc.find(key => key === workbasket.key));
        if (!task) return { ...workbasket, openTasks: 0 };
        return { ...workbasket, openTasks: task.total };
      });
    });
  }

  selectClaim(workbasket: Workbasket) {
    const httpObservable = this.http.post<Task>(
      `${environment.taskanaRestUrl}/v1/tasks/select-and-claim?workbasket-id=${workbasket.workbasketId}`,
      ''
    );
    httpObservable.pipe(take(1)).subscribe((task: Task) => {
      this.router.navigate(['task-processing', task.taskId], { relativeTo: this.route.parent });
    });
  }
}
