import { Injectable } from '@angular/core';
import {of as observableOf,  Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedGraphService {
  graphData : object;
  public nodeDetails = new BehaviorSubject<any>(null);
  public connectedNodeDetails = new BehaviorSubject<any>(null);
  public getNodeByIDs = new BehaviorSubject<Array<any>>([]);
  public showDeletedData = new BehaviorSubject<boolean>(null);
  private restoreConnectedNodesData = false;
  constructor() { }
  setGraphData(graphdata){
    this.graphData = graphdata;
  }
  getGraphData(){
    return this.graphData;
  }

  getNodeDetails(nodeIDs, forRestore = false) {
      this.restoreConnectedNodesData = forRestore ? true : false;
      this.getNodeByIDs.next(nodeIDs);
  }
  sendNodeDetails(nodeDetailsArray) {
    if (this.restoreConnectedNodesData) {
      this.connectedNodeDetails.next(nodeDetailsArray);
    } else {
      this.nodeDetails.next(nodeDetailsArray);
    }
    this.restoreConnectedNodesData = false;
  }

  // function to send the deleted toggle info whenever needed
  sendToogleStatus(status) {
    console.log('sending new status for toggle ', status);
    this.showDeletedData.next(status);
  }
}
