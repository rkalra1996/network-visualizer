import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicHttpService {

  constructor(private http: HttpClient) { }

  get(url) {
    const requestUrl = !!url ? url : null;

    if (!!requestUrl) {
      return this.http.get(requestUrl);
    } else {
      console.error('No url provided for get request');
      return throwError('No url provided');
    }
  }
  post() {}
  patch() {}
}
