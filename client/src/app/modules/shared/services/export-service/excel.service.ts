import { Injectable } from '@angular/core';
import * as $ from 'jquery';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  // public exportAsExcelFile(json: any[], excelFileName: string): void {
  //   var blob = new Blob(json, { type: 'data:application/vnd.ms-excel' });
  //           var downloadUrl = URL.createObjectURL(blob);
  //           var a = document.createElement("a");
  //           a.href = downloadUrl;
  //           a.download = "downloadFile.xlsx";
  //           document.body.appendChild(a);
  //           a.click();
  // }
  public exportAsExcelFile(){
    $(document).ready(function(){
      var settings = {
          url: "http://localhost:9000/v1/data/read",
             type: 'GET',
             headers: {
              "user-token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuZXR3b3JrLXZpc3VhbGl6ZXIiLCJpc3MiOiJOSUlUIiwiaWF0IjoxNTY1MTgwMTc1LCJleHAiOjE1NjUyNjY1NzV9.HP-TGO1MjR4RnyMrvTHyslUgNJcbgP-dIib7jU5-Kns8g4PvrQS2RrQzH7HeDMwrhXRPZilkF5DN70ElUAzmnA"
             },
             contentType: 'application/json; charset=utf-8',
             success:function (response) {
              console.log(response);
              var blob = new Blob([response], { type: 'data:text/csv' });
              var downloadUrl = URL.createObjectURL(blob);
              var a = document.createElement("a");
              a.href = downloadUrl;
              a.download = "downloadFile.csv";
              document.body.appendChild(a);
              a.click();
            }
        }
        $.ajax(settings).done(function(response) {
          console.log('hello',response);
          var blob = new Blob([response], { type: 'data:application/vnd.ms-excel' });
          var downloadUrl = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = downloadUrl;
          a.download = "downloadFile.xlsx";
          document.body.appendChild(a);
          a.click();
        });
   })
   
  }
}
