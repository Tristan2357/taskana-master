import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ChartData } from 'app/monitor/models/chart-data';
import { ReportData } from '../../../monitor/models/report-data';

const monitorUrl = '/v1/monitor/';

@Injectable()
export class ReportService {
  constructor(private httpClient: HttpClient) {}

  getTaskStatusReport(): Observable<ReportData> {
    return this.httpClient.get<ReportData>(
      `${environment.taskanaRestUrl + monitorUrl}tasks-status-report?states=READY,CLAIMED,COMPLETED`
    );
  }

  getWorkbasketReportByDueDate(states: string[] = ['READY', 'CLAIMED', 'COMPLETED']): Observable<ReportData> {
    return this.httpClient.get<ReportData>(
      `${environment.taskanaRestUrl + monitorUrl}tasks-workbasket-report?states=` + states.join(',')
    );
  }

  getWorkbasketReportByPlannedDate(daysInPast: Number = 7): Observable<ReportData> {
    return this.httpClient.get<ReportData>(
      `${environment.taskanaRestUrl}/v1/monitor/tasks-workbasket-planned-date-report?daysInPast=${daysInPast}&states=READY,CLAIMED,COMPLETED`
    );
  }

  getClassificationTasksReport(): Observable<ReportData> {
    return this.httpClient.get<ReportData>(`${environment.taskanaRestUrl + monitorUrl}tasks-classification-report`);
  }

  getDailyEntryExitReport(): Observable<ReportData> {
    return this.httpClient.get<ReportData>(`${environment.taskanaRestUrl + monitorUrl}timestamp-report`);
  }

  getChartData(source: ReportData): Array<ChartData> {
    return source.rows.map((row) => {
      const rowData = new ChartData();
      [rowData.label] = row.desc;
      rowData.data = row.cells;
      return rowData;
    });
  }
}
