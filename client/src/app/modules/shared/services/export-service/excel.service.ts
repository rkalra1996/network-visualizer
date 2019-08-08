import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { PublicHttpService } from 'src/app/modules/core/services/public/public-http/public-http.service';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

import * as token from './../../../../../assets/user-token.json';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private publicHttp : PublicHttpService) { }

  public exportAsExcelFile(){
    let request = {
      url: "http://localhost:9000/v1/data/read",
      httpOptions :{
          // "user-token": token['user-token'],
          // "contentType": 'application/json; charset=utf-8'
          "Access-Control-Allow-Origin" : true
         }
    }
  
    this.publicHttp.get(request.url, request.httpOptions).subscribe((response:any) => {
      let blob = new Blob([response], { type: 'data:application/vnd.ms-excel' });
      let downloadUrl = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = downloadUrl;
      let d = new Date();
      a.download = "GraphData_"+d.getTime();+".xlsx";
      document.body.appendChild(a);
      a.click();
    })
        
   
  }
}
