import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicHttpService } from '../public/public-http/public-http.service';


@Injectable({
  providedIn: 'root'
})
export class GraphExportService {

  constructor(private publicHttp: PublicHttpService) { }

  getExportFormat(format) {
  /**
   * The main purpose of this function is to get the export data in the specified format
   * Currently supports only csv and excel formats
   */
    if (format) {
      const url = `/file/graph/export/${format}`;
      try {
        return this.publicHttp.get(url).pipe(map(data => {
          if (!!data) {
            const convertedData = this.convertFileDataToBlob(data);
            return convertedData;
          } else {
            console.warn('did not recieve any data when retrieving export');
            return of({});
          }
        }));
      } catch (e) {
        const convertedData = this.convertFileDataToBlob(e['text']);
            return of(convertedData);
      }
    }
  }



  // utility function to convert raw data into blob
  convertFileDataToBlob(rawData) {
    try {
      let data = rawData['data'];
      const blob = new Blob([data], { type: 'data:application/vnd.ms-excel' });
      const downloadUrl = URL.createObjectURL(blob);
      const fileName = `networks.csv`;
      return { data: blob, url: downloadUrl, fileName };
    } catch (err) {
      // handle any error occured during blob creation
      console.error('An error occured while creating a blob for xport functionality');
      return {data : null , url: null, fileName: null};
    }
  }

  initiateDownload(elementType, data = {}) {
    if (!!elementType) {
      const element = document.createElement(elementType);
      element.href = data['url'];
      element.download = `${data['fileName']}`;
      return element;
  } else {
    return null;
  }
  }
}
