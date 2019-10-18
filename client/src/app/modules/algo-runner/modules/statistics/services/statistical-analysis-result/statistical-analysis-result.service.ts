import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticalAnalysisResultService {
private flag = new BehaviorSubject<boolean>(false);
flag$ = this.flag.asObservable();
  constructor() { }

  renderAnalysisResult(flagValue) {
    this.flag.next(flagValue);
  }
}
