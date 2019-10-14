import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest,
  HttpResponse, HttpHandler,
  HttpEvent, HttpErrorResponse,
  HttpParams
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// import sharedService so that we can access the toggle response
import { SharedGraphService } from './../../shared-graph.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService implements HttpInterceptor {

  private showDeletedData = false;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // update the body with an added parameter to fetch deleted data or not
    console.log('setting show deleted for req ---> ', req.url + ' to ' + this.showDeletedData);
    if (req.method === 'POST') {
      let request = req.clone({body : { ...req.body, showDeleted : this.showDeletedData}});
      return next.handle(request);
    } else if (req.method === 'GET' && req.url.split('/').indexOf('config') <= 0) {
      let request = req.clone({url: req.url + `?deleted=${this.showDeletedData}`});
      console.log('new get request created is ', request);
      return next.handle(request);
    }
    return next.handle(req);
  }

  constructor(private sharedService: SharedGraphService) {
    this.sharedService.showDeletedData.subscribe(toggle => {
      this.setDeletedDataToggle(toggle);
    }, error => {
      console.warn('An error occured while subscribing to the toggle event in core interceptor', error);
    });
   }

   // handler to set deleted toggler
   setDeletedDataToggle(toggle) {
    if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
      // if the toggle variable is  only true and false and nothing else
      this.showDeletedData = toggle;
      // console.log('recieved toggle in core interceptor', toggle);
    } else {
      // set to false by default
      this.showDeletedData = false;
    }
   }
}
