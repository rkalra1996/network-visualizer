import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticSidebarDataService {
private _algoList= new BehaviorSubject<Array<any>>([]);
public algoList$: Observable<Array<any>> = this._algoList.asObservable();
listOfAlgo = ['Shortest Path','Top Connected Node','Top Interacting Node','Network Sentiments',
'Recommended Skills','Recommended Nodes','Nodes Centrality']
  constructor() { 
    this._algoList.next(this.listOfAlgo);
  }
}
