import { Component, OnInit } from '@angular/core';
import { GraphExportService } from 'src/app/modules/core/services/graph-export-service/graph-export.service';
import { ExcelService } from 'src/app/modules/shared/services/export-service/excel.service';

@Component({
  selector: 'app-graph-exporter',
  templateUrl: './graph-exporter.component.html',
  styleUrls: ['./graph-exporter.component.scss']
})
export class GraphExporterComponent implements OnInit {

  constructor(private fileService: GraphExportService, private excelService : ExcelService) { }

  ngOnInit() {
  }
  exportAsCsv(format) {
  this.fileService.getExportFormat(format)
  .subscribe(fileData => {
    const element = this.fileService.initiateDownload('a', fileData);
    // initiate download
    element.click();
  }, error => {
    //check for ok and status
    if (error.ok === false && error.status === 200) {
      const element = this.fileService.initiateDownload('a', error['text']);
    // initiate download
    element.click();
    } else {
      console.error('An error occured while getting file content from the service ', error);
    }
  });
}
}
