import { Component, OnInit } from '@angular/core';

import {GraphDataService} from './../../services/graph-data-service/graph-data.service';
import {Network, DataSet, Node, Edge, IdType} from 'vis';

declare var vis: any;
@Component({
  selector: 'app-graph-visualizer',
  templateUrl: './graph-visualizer.component.html',
  styleUrls: ['./graph-visualizer.component.scss']
})
export class GraphVisualizerComponent implements OnInit {

  public graphData = {};
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
              customScalingFunction: function (min,max,total,value) {
                  return value/total;
              },
              min:5,
              max:150
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
        this.graphData['nodes'] = result['seperateNodes'];
      }
      if (result.hasOwnProperty('seperateEdges')) {
        this.graphData['edges'] = result['seperateEdges'];
      }
      console.log('graphData :', this.graphData);
      // display data
      const container = document.getElementById('graphViewer');
      let network = new Network(container, this.graphData, this.graphOptions);
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.graphData = {};
    });
  }

}
