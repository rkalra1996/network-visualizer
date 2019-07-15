import { Injectable } from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import { PublicHttpService } from '../public/public-http/public-http.service';
import { HttpHeaders } from '@angular/common/http';

// import {PublicHttpService} from '@network-visualizer-core/public-http/PublicHttpService';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor(private publicHttp: PublicHttpService) { }

  getInitialData() {
    const url = 'http://localhost:3050/api/initialdata';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getSearchData(body) {
    const url = 'http://localhost:3050/api/graph/data';
    return this.publicHttp.post(url,body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
}
