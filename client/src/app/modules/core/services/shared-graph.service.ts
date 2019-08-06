import { Injectable } from '@angular/core';
import {of as observableOf,  Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedGraphService {
  graphData : object;
  public nodeDetails = new BehaviorSubject<any>(null);
  public getNodeByIDs = new BehaviorSubject<Array<any>>([]);
  constructor() { }
  setGraphData(graphdata){
    this.graphData = graphdata;
  }
  getGraphData(){
    return this.graphData;
  }

  getNodeDetails(nodeIDs) {
    this.getNodeByIDs.next(nodeIDs);
  }
  sendNodeDetails(nodeDetailsArray) {
    this.nodeDetails.next(nodeDetailsArray);
  }
}
