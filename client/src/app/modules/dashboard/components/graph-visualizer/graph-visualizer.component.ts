import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import {Network, DataSet, Node, Edge, IdType} from 'vis';
import * as _ from 'lodash';
import { SharedGraphService } from 'src/app/modules/core/services/shared-graph.service';


@Component({
  selector: 'app-graph-visualizer',
  templateUrl: './graph-visualizer.component.html',
  styleUrls: ['./graph-visualizer.component.scss']
})
export class GraphVisualizerComponent implements OnInit {

  @Input() event: String;
  public graphData = {};
  
  public colorConfig = {
    defaultColor : {
      Department : '#FF7570',
      Organisation : 'orange',
      Person : '#6ECE9E'
    },
    selectedColor : {
      Department : '#FF7570',
      Organisation : 'orange',
      Person : '#6ECE9E'
    }
  };

  public network: any;
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

  constructor(private graphService: GraphDataService, private sharedGraphService : SharedGraphService) { }

  ngOnInit() {
    this.displayInitialGraph();
  }

  displayInitialGraph() {
    this.graphService.getInitialData().subscribe(result => {
      console.log('recieved data from graph service', result);
      // set data for vis
      if (result.hasOwnProperty('seperateNodes')) {
        // add colors to nodes
        result['seperateNodes'] = this.addColors(result['seperateNodes']);
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
  console.log('graph',this.event);
  this.changeNodeColor();
  }
  changeNodeColor(){
    if(this.event == 'search1' || this.event == 'search2'){
      this.showGraphData();
    }else if(this.event == 'reset'){
      this.displayInitialGraph();
    }else{
    const previousData = _.cloneDeep(this.graphData);
    // tslint:disable-next-line: no-string-literal
    if(!!this.graphData['nodes']){
      var temgraph = this.graphData['nodes'].map(node=>{
        if(this.event == node.type[0]){
          node.color = this.colorConfig.defaultColor[node.type[0]];
        }else{
          node.color='#95BFF8';
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
    }

    reinitializeGraph() {
      const container = document.getElementById('graphViewer');
      this.network.setData(this.graphData);
    }
    showGraphData(){
      let requestBody = this.sharedGraphService.getGraphData();
      this.graphService.getSearchData(requestBody).subscribe(result=>{
        //console.log('recieved data from graph service', result);
        // set data for vis
        if (result.hasOwnProperty('seperateNodes')) {
          result['seperateNodes'] = this.addColors(result['seperateNodes']);
          this.graphData['nodes'] = new DataSet(result['seperateNodes']);
        }
        if (result.hasOwnProperty('seperateEdges')) {
          this.graphData['edges'] = new DataSet(result['seperateEdges']);
        }
        //console.log('graphData :', this.graphData);
        // display data
        const container = document.getElementById('graphViewer');
        this.network = new Network(container, this.graphData, this.graphOptions);
      }, err => {
        console.error('An error occured while retrieving initial graph data', err);
        this.graphData = {};
       });
    }

    addColors(nodeObj) {
      console.log(nodeObj);
      nodeObj.forEach(node => {
        if (node.hasOwnProperty('type') && node.type.length > 0 ) {
          node['color'] = this.colorConfig.defaultColor[node.type[0]];
        }
      });
      console.log(nodeObj);
      return nodeObj;

    }
}
