import { Injectable } from '@angular/core';
import {of as observableOf,  Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedGraphService {
  graphData : object;
  public nodeDetails = new BehaviorSubject<any>(null);
  public getNodeByIDs = new BehaviorSubject<Array<any>>([]);
  public showDeletedData = new BehaviorSubject<boolean>(null);
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

  // function to send the deleted toggle info whenever needed
  sendToogleStatus(status) {
    console.log('sending new status for toggle ', status);
    this.showDeletedData.next(status);
  }
}
