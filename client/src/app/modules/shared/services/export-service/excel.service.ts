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

  // public exportAsExcelFile(){
  //   let request = {
  //     url: "http://localhost:9000/v1/data/read",
  //     httpOptions :{
  //         // "user-token": token['user-token'],
  //          "contentType": 'text/csv',
  //         "Access-Control-Allow-Origin" : true
  //        }
  //   }
  
  //   this.publicHttp.get(request.url, request.httpOptions).subscribe((response:any) => {
  //     let blob = new Blob([response], { type: 'data:text/csv' });
  //     let downloadUrl = URL.createObjectURL(blob);
  //     let a = document.createElement("a");
  //     a.href = downloadUrl;
  //     let d = new Date();
  //     a.download = "GraphData_"+d.getTime();+".csv";
  //     document.body.appendChild(a);
  //     a.click();
  //   },err =>{
  //     if(err.status === 200 && err.ok == false){
  //       let blob = new Blob(err.text, { type: 'data:text/csv' });
  //     let downloadUrl = URL.createObjectURL(blob);
  //     let a = document.createElement("a");
  //     a.href = downloadUrl;
  //     let d = new Date();
  //     a.download = "GraphData_"+d.getTime()+".xlsx";
  //     document.body.appendChild(a);
  //     a.click();
  //     }
  //     else {console.log("else",err)}
  //   })
        
   
  // }
   public exportAsExcelFile(){
  $(document).ready(function(){
    var settings = {
        url: "http://localhost:9000/v1/data/read",
           type: 'GET',
           headers: {
           },
           contentType: 'application/json; charset=utf-8',
          //  success:function (response) {
          //   console.log(response);
          //   var blob = new Blob([response], { type: 'data:text/csv' });
          //   var downloadUrl = URL.createObjectURL(blob);
          //   var a = document.createElement("a");
          //   a.href = downloadUrl;
          //   a.download = "downloadFile.csv";
          //   document.body.appendChild(a);
          //   a.click();
          // }
      }
      $.ajax(settings)
      .done(function(response) {
        console.log('hello',response);
        var blob = new Blob([response], { type: 'data:application/vnd.ms-excel' });
        var downloadUrl = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "Database.xlsx";
        document.body.appendChild(a);
        a.click();
      }).fail((error) => {
        console.log('error recieved is ', error);
      });
 })
}
}
