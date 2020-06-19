import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
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
  workbaskets: (Workbasket & {openTasks: Number})[];

  constructor(private workbasketService: WorkbasketService, private http: HttpClient) { }

  ngOnInit() {
    const workbasketObservable = this.workbasketService.getAllWorkBaskets();
    const httpObservable = this.http.get<ReportData>(`${environment.taskanaRestUrl}/v1/monitor/tasks-workbasket-report?states=READY`);
    forkJoin([workbasketObservable, httpObservable]).subscribe(resultArray => {
      const { workbaskets } = resultArray[0];
      const { rows } = resultArray[1];
      console.log(rows);
      this.workbaskets = workbaskets.map(workbasket => {
        const task = rows.find(row => row.desc.find(key => key === workbasket.key));
        if (!task) return { ...workbasket, openTasks: 0 };
        return { ...workbasket, openTasks: task.total };
      });
      console.log(this.workbaskets);
    });
  }
}
