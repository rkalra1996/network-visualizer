import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import {GraphDataService} from './../../services/graph-data-service/graph-data.service';
import {Network, DataSet, Node, Edge, IdType} from 'vis';
 import * as _ from 'lodash';
import { SharedGraphService } from '../../services/shared-graph.service';

declare var vis: any;
@Component({
  selector: 'app-graph-visualizer',
  templateUrl: './graph-visualizer.component.html',
  styleUrls: ['./graph-visualizer.component.scss']
})
export class GraphVisualizerComponent implements OnInit {
  @Input() event: String;
  public graphData = {};
  public network : any;
  private graphOptions = {
      physics: false,
      edges: {
          smooth: {
              type: 'continuous',
              forceDirection: 'none'
              }
      },
      nodes: {
          shape: 'dot',
          scaling: {
              customScalingFunction: (min,max,total,value) => {
                  return value / total;
              },
              min: 5,
              max: 150
          }
      }
  };

  constructor(private graphService: GraphDataService) { }

  ngOnInit() {
    this.displayInitialGraph();
  }

  displayInitialGraph() {
    this.graphService.getInitialData().subscribe(result => {
      console.log('recieved data from graph service', result);
      // set data for vis
      if (result.hasOwnProperty('seperateNodes')) {
        this.graphData['nodes'] = new DataSet(result['seperateNodes']);
      }
      if (result.hasOwnProperty('seperateEdges')) {
        this.graphData['edges'] = new DataSet(result['seperateEdges']);
      }
      console.log('graphData :', this.graphData);
      // display data
      const container = document.getElementById('graphViewer');
      this.network = new Network(container, this.graphData, this.graphOptions);
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.graphData = {};
    });
  }

  ngOnChanges(changes: SimpleChanges) {
  console.log("graph",this.event);
  this.changeNodeColor();
  }
  changeNodeColor(){
    let previousData = _.cloneDeep(this.graphData); 
    if(!!this.graphData["nodes"]){
      var temgraph = this.graphData["nodes"].map(node=>{
        if(this.event==node.type[0]){
          node["color"]="#FFCC99";
        }else{
          node["color"]="#95BFF8";
          return node;
        }
        return node;
      })
      previousData.nodes.clear();
      previousData.nodes = new DataSet(_.cloneDeep(temgraph));
      this.graphData = previousData;
      this.reinitializeGraph();
      console.log(this.graphData)
    }
  
    }

    reinitializeGraph() {
      const container = document.getElementById('graphViewer');
      this.network.setData(this.graphData);
    }
   
   
}
