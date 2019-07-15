import { Injectable } from '@angular/core';
import {of as observableOf,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedGraphService {
  graphData : object;
  constructor() { }
  setGraphData(graphdata){
    this.graphData = graphdata;
  }
  getGraphData(){
    return this.graphData;
  }
}
