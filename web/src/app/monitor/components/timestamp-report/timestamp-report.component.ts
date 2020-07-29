import { Component, OnInit } from '@angular/core';
import { ReportData } from '../../models/report-data';
import { ReportService } from '../../../shared/services/report/report.service';

@Component({
  selector: 'taskana-monitor-timestamp-report',
  templateUrl: './timestamp-report.component.html',
  styleUrls: ['./timestamp-report.component.scss']
})
export class TimestampReportComponent implements OnInit {
  reportData: ReportData;

  constructor(private restConnectorService: ReportService) {}

  ngOnInit() {
    this.restConnectorService.getDailyEntryExitReport().subscribe((data: ReportData) => {
      this.reportData = data;
    });
  }
}
