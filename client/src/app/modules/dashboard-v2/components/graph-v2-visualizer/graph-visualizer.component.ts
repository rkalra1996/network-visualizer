import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import { Network, DataSet} from 'vis';
import * as _ from 'lodash';
import { SharedGraphService } from 'src/app/modules/core/services/shared-graph.service';

import { elementOperation } from './../../interfaces/elementOperation';
import {AlgoRunnerExportInterface} from './../../interfaces/algo-runner-export';

import {MaterialService} from './../../../custom-material/services/material-core/material.service';
import { ColorServiceService } from '../../services/colorService/color-service.service';
import { ToolbarSharedService } from 'src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service';
import { CoreFilterService } from 'src/app/modules/redux/services/core-filter-service/core-filter.service';

@Component({
  selector: 'app-graph-visualizer',
  templateUrl: './graph-visualizer.component.html',
  styleUrls: ['./graph-visualizer.component.scss']
})
export class GraphVisualizerComponent implements OnInit {

  @Input() event: Object;
  @Input() totalTypesArray = [];
  @Output() newNodeCreated = new EventEmitter<object>();
  @Output() nodeLimitEvent = new EventEmitter<string | null>();

  private NODE_CREATE_TEXT_SUCCESS = 'Node has been created successfully !';
  private NODE_CREATE_TEXT_ERROR = 'An error occured while creating a new node !';
  private NODE_CREATE_TEXT_ERROR_VIS = 'An error occured while displaying the new node !';
  private NODE_UPDATE_TEXT_SUCCESS = 'Node has been updated successfully !';
  private NODE_UPDATE_TEXT_ERROR = 'An error occured while updating the node !';
  private NODE_UPDATE_TEXT_ERROR_VIS = 'An error occured while displaying updated node in the graph !';
  private NODE_DELETE_TEXT_SUCCESS = 'Node has been deleted successfully !';
  private NODE_DELETE_TEXT_ERROR = 'An error occured while deleting the Node !';
  private RELATION_CREATE_TEXT_SUCCESS = 'New Relationship created successfully !';
  private RELATION_CREATE_TEXT_ERROR = 'An error occured while creating new relationship !';
  private RELATION_CREATE_TEXT_ERROR_VIS = 'An error occured while displaying the new relationship in graph !';
  private RELATION_UPDATE_TEXT_SUCCESS = 'Relationship has been updated successfully !';
  private RELATION_UPDATE_TEXT_ERROR = 'An error occured while upating the relationship !';
  private RELATION_DELETE_TEXT_SUCCESS = 'Relationship has been deleted successfully !';
  private RELATION_DELETE_TEXT_ERROR = 'An error occured while deleting the relationship from the database !';
  private DATA_RESTORE_TEXT_SUCCESS = 'Data has been restored successfully !'
  private DATA_RESTORE_TEXT_ERROR = 'An error occured while restoring the data !'
  private showDeletedData = null;
  public promptRelationCreateAfterNode = null;
  public requestedNodeDetails = null;
  public graphData = {};
  public errorMessage = '';
  public loader = true;
  public defaultNodeLimit = 149;
  selectedCount;
  public nodeLimit: any = 149;
  public emptyNodeLimit = 179;
  public colorConfig = {};
  public editNodeData = null;
  public editRelationData = null;
  public restoredData = null;
  public network: any;
  @Output() networkInstance = new EventEmitter<any>();
  public hideDelModal = false;
  // graph options to change the visualization configuration of visjs
  private graphOptions = {
    physics: false,
    interaction: {
      navigationButtons: true
    },
    edges: {
      smooth: {
        type: 'dynamic'
      }
    },
    nodes: {
      shape: 'dot',
      scaling: {
        customScalingFunction: (min, max, total, value) => {
          return value / total;
        },
        min: 5,
        max: 150
      }
    }
  };

  public allGraphData = {};
  public filteredGraphData = {};

  // Variable to send the graph data and filtered query object to algo runner for future use
  private algoRunnerData: AlgoRunnerExportInterface = {};

  constructor(
    private graphService: GraphDataService,
    private sharedGraphService: SharedGraphService,
    private snackBar: MaterialService,
    private colorService: ColorServiceService, private algoRunnerShrdSrvc: ToolbarSharedService,
    private CoreFilterSrvc: CoreFilterService) { }

  ngOnInit() {
    this.loader = true;
    this.displayInitialGraph();
    this.sharedGraphService.getNodeByIDs.subscribe(nodeIDArray => {
      // recieved array IDs
      console.log('recieved array ID for processing ', nodeIDArray);
      let nodesByIDs = this.getNodeDetails(nodeIDArray);
      console.log('processed data now is  ', nodesByIDs);
      this.sharedGraphService.sendNodeDetails(nodesByIDs);
    }, err => { });

    // subscribe to showDeletedData so that appropriate data can be fetched
    this.sharedGraphService.showDeletedData.subscribe(toggle => {
      if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
        this.loader = true;
        // if the toggle variable is  only true and false and nothing else
        this.showDeletedData = toggle;
        // console.log('recieved toggle', toggle);
      } else {
        // set to false by default
        this.showDeletedData = false;
      }
      if (this.showDeletedData) {
        this.showAllData();
      } else {
        if (this.allGraphData.hasOwnProperty('nodes')) {
          this.showFilteredData();
        }
      }
    }, err => {
      // set to false by default
      console.error('An error occured while subscribing to the toggle for deleted data', err);
      this.showDeletedData = false;
      this.displayInitialGraph();
    });

    this.colorService.colorObj$.subscribe(response => {
      this.colorConfig = response;
    });
  }

  displayInitialGraph() {
    this.graphService.getInitialDataV2().subscribe(result => {
      console.log('recieved data from graph service', result);
      // set data for vis
      if (result.hasOwnProperty('seperateNodes')) {
        // set color config using nodes color properties
        this.updateColorConfigObject(result);
        // add colors to nodes
        result = this.addColors(result);
        // store all data without any filter
        this.allGraphData['nodes'] = result['seperateNodes'];
        this.allGraphData['edges'] = result['seperateEdges'];
        // to update filtered data
      this.setFilteredData(this.showDeletedData);
        // check for show deleted toggel
        if (this.showDeletedData) {
          // show all data
          this.graphData['nodes'] = new DataSet(this.allGraphData['nodes']);
        } else {
          // show filtered data
          this.graphData['nodes'] = new DataSet(this.filteredGraphData['nodes']);
        }
        this.selectedCount = this.graphData['nodes'].length;
      }
      if (result.hasOwnProperty('seperateEdges')) {
        // check for show deleted toggel
        if (this.showDeletedData) {
          this.graphData['edges'] = new DataSet(this.allGraphData['edges']);
        } else {
          // show filtered data
          this.graphData['edges'] = new DataSet(this.filteredGraphData['edges']);
        }
      }
      // console.log('graphData :', this.graphData);
      // display data
      const container = document.getElementById('graphViewer');
      this.loader = false;
      this.network = new Network(container, this.graphData, this.graphOptions);

      // activating double click event for editing node or relationship
      console.log('registering double click');
      this.network.on('doubleClick', (event) => {
        this.hideDelModal = false;
        console.log('double click');
        this.doubleClickHandler(event);
      });
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.loader = true;
      this.graphData = {};
    });
    // activate double click event for editing a node or a relationship

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.event) {
      const searchEvent = this.event['event'];
      if (searchEvent === 'search' || searchEvent === 'reset') {
        this.event = searchEvent;
        this.changeNodeColor();
      }
    }
  }
  changeNodeColor() {
    if (this.event === 'search') {
      this.loader = true;
      this.showGraphData();
    } else if (this.event === 'reset') {
      this.loader = true;
      this.nodeLimit = this.defaultNodeLimit;
      this.displayInitialGraph();
    } else {
      const previousData = _.cloneDeep(this.graphData);
      // tslint:disable-next-line: no-string-literal
      if (!!this.graphData['nodes']) {
        let temgraph = this.graphData['nodes'].map(node => {
          if (this.event === node.type[0]) {
            // node.color = this.colorConfig.defaultColor[node.type[0]];
          } else {
            // node.color='#95BFF8';
            return node;
          }
          return node;
        });
        previousData.nodes.clear();
        previousData.nodes = new DataSet(_.cloneDeep(temgraph));
        this.graphData = previousData;
        this.reinitializeGraph();
      }
    }
  }

  reinitializeGraph() {
    const container = document.getElementById('graphViewer');
    this.network.setData(this.graphData);
    this.network.on('doubleClick', (event) => {
      this.hideDelModal = false;
      this.doubleClickHandler(event);
    });
  }
  showGraphData() {
    this.loader = true;
    let requestBody = this.sharedGraphService.getGraphData();
    // check for node limit
    if (this.nodeLimit === "") {
      requestBody["limit"] = this.emptyNodeLimit;
    } else if (!isNaN(this.nodeLimit)) {
      requestBody["limit"] = this.nodeLimit;
    } else {
      requestBody["limit"] = this.defaultNodeLimit;
    }
    // send the data to algo runner for future use
    this.updateAlgoRunnerObject({nodeFilter: requestBody});

    this.graphService.getSearchDataV2(requestBody).subscribe(result => {
      // console.log('recieved data from graph service', result);
      // set data for vis
      if (result.hasOwnProperty('seperateNodes')) {
        result = this.addColors(result);
        //this.graphData['nodes'] = new DataSet(result['seperateNodes']);
        // store all data without any filter
        // this.allGraphData['nodes'] = new DataSet(result['seperateNodes']); 
        this.allGraphData['nodes'] = result['seperateNodes'];
        this.allGraphData['edges'] = result['seperateEdges'];
        // to update filtered data
        this.setFilteredData();
        //check for show deleted 
        if (this.showDeletedData) {
          // show all data
          this.graphData['nodes'] = new DataSet(this.allGraphData['nodes']);

        } else {
          // remove deleted data
          this.graphData['nodes'] = new DataSet(this.filteredGraphData['nodes']);
        }
        this.selectedCount = this.graphData['nodes'].length;
      }
      if (result.hasOwnProperty('seperateEdges')) {
        if (this.showDeletedData) {
          this.graphData['edges'] = new DataSet(this.allGraphData['edges']);
        } else {
          this.graphData['edges'] = new DataSet(this.filteredGraphData['edges']);
        }

      }
      // console.log('graphData :', this.graphData);
      // display data

      // send the data to algo runner for future use
      let dataForAlgoRunner = {
        completeGraph: this.allGraphData,
        deletedGraph: this.filteredGraphData,
        propjectedGraph: this.graphData
      }
      this.updateAlgoRunnerObject(dataForAlgoRunner);

      // update the redux store with this data
      this.CoreFilterSrvc.updateAppliedFiltersData({request: requestBody, data: dataForAlgoRunner});

      const container = document.getElementById('graphViewer');
      this.network = new Network(container, this.graphData, this.graphOptions);
      this.network.on('doubleClick', (event) => {
        this.hideDelModal = false;
        this.doubleClickHandler(event);
      });
      this.loader = false;
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.loader = true;
      this.graphData = {};
    });
  }

  /**
   * Updates algo runner object
   * @description It is used to update the global algo runner object at various times the apply/reset/showDeleted buttons are used
   * @param newObject
   */
  updateAlgoRunnerObject(newObject: AlgoRunnerExportInterface) {
    if (newObject.hasOwnProperty('completeGraph')) {
      this.algoRunnerData.completeGraph = newObject.completeGraph;
    }
    if (newObject.hasOwnProperty('deletedGraph')) {
      this.algoRunnerData.deletedGraph = newObject.deletedGraph;
    }
    if (newObject.hasOwnProperty('nodeFilter')) {
      this.algoRunnerData.nodeFilter = newObject.nodeFilter;
    }
    if (newObject.hasOwnProperty('relationFilter')) {
      this.algoRunnerData.relationFilter = newObject.relationFilter;
    }
    if (newObject.hasOwnProperty('propjectedGraph')) {
      this.algoRunnerData.propjectedGraph = newObject.propjectedGraph;
    }
    // send the final prepared object
    this.algoRunnerShrdSrvc.sendRecentFilters(this.algoRunnerData);
  }

  updateColorConfigObject(resultObj){
    let temColorObj = {};
    resultObj['seperateNodes'].forEach(node => {
      if (node.hasOwnProperty('type') && node.type.length > 0 && node.hasOwnProperty('properties')) {
        if(!temColorObj[node.type[0]]){
          if(node['properties']['color']){
            temColorObj[node.type[0]] = node['properties']['color'];
          }else{
            temColorObj[node.type[0]] = this.colorConfig['initialColor']['colorCode'];
          }
        }
      }
      });
      this.colorService.updateDefaultColor(temColorObj);
  }

  addColors(resultObj) {
    // if the user opted for deleted data, simply set deleted default color to all the nodes
    resultObj['seperateNodes'].forEach(node => {
      if (node.hasOwnProperty('type') && node.type.length > 0) {
        if (node['properties']['deleted'] === "true" || node['properties']['deleted'] === true) {
          node['color'] = this.colorConfig['deletedColor']['colorCode'];
        } else {
          // if the node has a color property, assign that else assign the defaults one
          node = this.shiftColorKey(node);
          if (!node.hasOwnProperty('color')) {
            node['color'] = this.colorConfig['defaultColor'][node.type[0]];
          }
        }
        // node['color'] = this.showDeletedData ? this.colorConfig.deletedColor.colorCode : this.colorConfig.defaultColor[node.type[0]];
        // // temporary fix, add exception for societal platform
        // if (node.label === 'Societal Platform Team') {
        //   node['color'] = this.colorConfig.defaultColor[node.type[0]];
        // }
      }
    });
    // if the user opted for deleted data, simply set deleted default color to all the edges
    resultObj['seperateEdges'].forEach(edge => {
      if (edge.hasOwnProperty('type') && edge.type.length > 0) {
        if (edge['properties']['deleted'] === "true" || edge['properties']['deleted'] === true) {
          edge['color']['color'] = this.colorConfig['deletedColor']['colorCode'];
          edge['color']['highlight'] = this.colorConfig['deletedColor']['highlightColorCode'];
        } else {
          // edge['color'] = this.colorConfig.defaultColor[edge.type[0]];
        }
      }
    });
    // console.log(nodeObj);
    return resultObj;

  }

  addColorProperty(node) {
      if (node.hasOwnProperty('type') && node.type.length > 0 && node.hasOwnProperty('properties')) {
        if (node['properties'].hasOwnProperty('color') && node['properties']['color'] === 'not available') {
        let index;
        let nodeType : string;
        nodeType = node.type;
        if(this.colorConfig['defaultColor'][nodeType]){
            node['properties']['color'] = this.colorConfig['defaultColor'][nodeType];
        }
      }
    }
    return node;
  }

  private limitChange(limit, popup) {
    if (limit === "") {
      this.errorMessage = 'Only valid numbers allowed'
      popup.open();
      window.setTimeout(() => {
        popup.close();
      }, 3000)
    } else if (!isNaN(limit)) {
      this.nodeLimit = parseInt(limit);
    } else {
      this.errorMessage = 'Only valid numbers allowed'
      popup.open();
      window.setTimeout(() => {
        popup.close();
      }, 3000)
    }

  }

  sendLimit(event, nodeLimit) {
    if (event['key'] === 'Enter') {
      this.nodeLimitEvent.emit(this.nodeLimit);
    } else {
      this.nodeLimitEvent.emit(null);
    }
  }

  nodeEventCapture(event) {
    if (Object.keys(event).length > 0) {

      if (event.action === 'create') {
        // handle the functionaluty of creating a node
        this.network.once('click', (clickEvent) => {
          console.log(clickEvent);
          // user should be able to fire an event onlyonce per dropdown click
          if (clickEvent.nodes.length > 0 || clickEvent.edges.length > 0) {
            // obviously a node cannot be created over another node or edge
            alert('please click on an empty space to create a node');
          } else {
            // user clicked on a good place to  create a node
            // console.log(this.graphData);
            if(event.data.properties['color'] === 'not available'){
              event.data = this.addColorProperty(event.data);
            }else{
              this.colorService.insertIntoDefaultColor({type: event.data.type,color: event.data.properties.color});
            }
            let newNodeData = {
              id: event.data.id,
              label: event.data.properties.Name,
              type: [event.data.type],
              properties: event.data.properties
            };

            // let newNodeForVis = _.cloneDeep(newNodeData);
            // make a request to create a node, if it succeedes only then show in the graph
            this.graphService.createNewNode(newNodeData).subscribe(response => {
              //update sidebar dropdown
              this.newNodeCreated.emit({ event: "NodeEvent_create" + response['seperateNodes'][0].id });
              // add additional data for vis layout
              // newNodeForVis = this.addData(newNodeForVis, clickEvent, event);
              try {
                let visNode = _.cloneDeep(this.addData(response['seperateNodes'][0], clickEvent, event));
                // to remove deleted key from tooltip
                // Add the color to the newly created node
                visNode['color'] = newNodeData.properties['color'];
                visNode['title'] = this.stringifyProperties(visNode);
                // add the new node to the vis
                this.graphData['nodes'].add([visNode]);
                // to update all data array while a new node is created
                let eleObj: elementOperation = {
                  element: 'nodes',
                  event: "create",
                  data: response['seperateNodes'][0]
                };
                this.updateGraphArray(eleObj);
                // emit the createNodes component that a node has been put into the graph, prompt user to create a relation
                // send the data of new node for relationPrompt

                // notify user
                this.snackBar.success({message: this.NODE_CREATE_TEXT_SUCCESS});

                this.promptRelationCreateAfterNode = _.cloneDeep({ created: true, node: visNode });
              } catch (addErr) {
                console.error('Error while adding the data node to vis ', addErr['message']);
                this.snackBar.error({message: this.NODE_CREATE_TEXT_ERROR_VIS});

              }
            }, error => {
              console.error('An error occured while creating node in  database ', error);
              this.snackBar.error({message: this.NODE_CREATE_TEXT_ERROR});

            });
          }
        });
      } else if (event.action === 'edit' && !event.hasOwnProperty('process')) {
        // handle the functionality of editing the node
        console.log('Node edit is being clicked');
        this.network.once('click', (clickEvent) => {
          console.log(clickEvent);
          let clickedNode = this.graphData['nodes'].get(clickEvent.nodes);
          // if there are multiple nodes one above another, always select the top most one
          if (clickedNode.length > 0) {
            clickedNode = _.cloneDeep(clickedNode[0]);
          }
          console.log('clicked Node is ', clickedNode);
          this.startEditProcess(clickedNode);
        });
      } else if (event.action === 'edit' && event.hasOwnProperty('process') && event.process === 'complete') {
        // this will be invoked when the user has clicked on edit feature and submitted the form with new data
        console.log('edit event captured with new data', event.data);
        // the process is to first create a node for data base update
        // once the node is updated , use the updated node from the database to update in the visJS
        let newNodeData = {
          id: event.data.id,
          label: event.data.properties.Name,
          type: [event.data.type],
          properties: event.data.properties
        };

        this.graphService.updateNode(newNodeData).subscribe(response => {
          console.log('response from update node ', response);
          try {
            const updatedNode = response['seperateNodes'][0];
            // logic to update node in vis data set
            let visNode = this.graphData['nodes'].get(updatedNode['id']);
            // update everything except color and id
            if ([visNode].length == 1) {
              visNode['properties'] = updatedNode['properties'];
              visNode['label'] = updatedNode['label'];
              visNode['title'] = updatedNode['title'];
              visNode['type'] = updatedNode['type'];
              console.log('update node details are ', visNode);
              // node was present, simply update it now
              if (this.showDeletedData) {
                this.graphData['nodes'].update(visNode);
              } else {
                let tem = _.cloneDeep(visNode);
                tem['title'] = this.stringifyProperties(tem);
                this.graphData['nodes'].update(tem);
              }

              // update all+filtered graph array
              let eleObj: elementOperation = {
                element: 'nodes',
                event: "edit",
                data: visNode
              };
              this.updateGraphArray(eleObj);
              //update sidebar dropdown
              this.newNodeCreated.emit({ event: 'NodeEvent_update' + response['seperateNodes'][0].id });
            }
            console.log(visNode);
            this.snackBar.success({message: this.NODE_UPDATE_TEXT_SUCCESS});

          } catch (updateErr) {
            // any error encountered while updating the node in vis js
            console.error('Error while upating the data node to vis ', updateErr['message']);
            this.snackBar.error({message: this.NODE_UPDATE_TEXT_ERROR_VIS});
          }
        }, err => {
          console.error('An error occured while updating node in database ', err);
          this.snackBar.error({message: this.NODE_UPDATE_TEXT_ERROR});
        });
      } else if (event.action === 'delete') {
        const nodeID = event.data.id;
        // get the list of relation ids which are connected to this node
        const connectedEdgeIDs = this.network.getConnectedEdges(nodeID);
        // hit the delete node api
        let requestOption = {
          id: nodeID,
          relations: connectedEdgeIDs
        }
        this.graphService.deleteNode(requestOption).subscribe(response => {
          // remove the node in vis graph and connected edges, if any
          const removedNode = response['seperateNodes'];
          if (response['seperateEdges'].length > 0) {
            let removedEdges = response['seperateEdges'];
            // update the edges
            removedEdges.map(removed => {
              // update all+filtered graph array
              let eleObj: elementOperation = {
                element: 'edges',
                event: "delete",
                data: removed
              };
              this.updateGraphArray(eleObj);
            });
            if (this.showDeletedData) {
              this.graphData['edges'].update(removedEdges);
            } else {
              this.graphData['edges'].remove(removedEdges);
            }
          }
          // update all+filtered array
          let eleObj: elementOperation = {
            element: 'nodes',
            event: "delete",
            data: response['seperateNodes'][0]
          };
          this.updateGraphArray(eleObj);
          // update the node in vis
          removedNode[0]['color'] = this.colorConfig['deletedColor']['colorCode'];
          if (this.showDeletedData) {
            this.graphData['nodes'].update(removedNode);
          } else {
            this.graphData['nodes'].remove(removedNode);
          }
          this.hideDelModal = _.cloneDeep(true);
          //update sidebar dropdown
          this.newNodeCreated.emit({ event: 'NodeEvent_delete' + response['seperateNodes'][0].id });
          this.snackBar.success({message: this.NODE_DELETE_TEXT_SUCCESS});
        }, err => {
          console.error('An error occured while reading response for node delete ', err);
          this.snackBar.error({message: this.NODE_DELETE_TEXT_ERROR});
        });
      } else {
        // invalid click event
        console.error('An invalid click event retrieved ', event);
      }
    }
  }

  edgeEventCapture(event) {
    if (Object.keys(event).length > 0) {
      if (event.action === 'create') {
        // handle the functionaluty of creating a node
        let newRelationData = {
          type: [event.data.type],
          properties: event.data.properties,
          from: event.data.from,
          to: event.data.to
        };
        // make a request to create a node, if it succeedes only then show in the graph
        this.graphService.createNewRelation(newRelationData).subscribe(response => {
          console.log(response);

          try {
            let visRelation = _.cloneDeep(response['seperateEdges'][0]);
            // to remove deleted key from tooltip
            this.newNodeCreated.emit({ event: "NodeEvent_create" + response['seperateEdges'][0] });
            visRelation['title'] = this.stringifyProperties(visRelation);
            // add the new node to the vis
            // first get the edge, if it is already present, simply update it else add it
            let isAlreadyPresent = this.graphData['edges'].get(visRelation['id']);
            let eleObj: elementOperation = {
              element: 'edges',
              event: "edit",
              data: response['seperateEdges'][0]
            };
            if (isAlreadyPresent !== null) {
              //update it 
              this.graphData['edges'].update([visRelation]);
              // update edge in allgraphdata and filtered data array
              this.updateGraphArray(eleObj);
            } else {
              this.graphData['edges'].add([visRelation]);
              // add new edge to allgraphdata and filtered data array
              eleObj.event = "create";
              this.updateGraphArray(eleObj);
            }
            this.snackBar.success({message: this.RELATION_CREATE_TEXT_SUCCESS});
          } catch (addErr) {
            console.log('Error while adding the data relation to vis ', addErr['message']);
            this.snackBar.error({message: this.RELATION_CREATE_TEXT_ERROR_VIS});
          }
        }, error => {
          console.log('error while reading new relation data from service ', error);
          this.snackBar.error({message: this.RELATION_CREATE_TEXT_ERROR});
        });
      } else if (event.action === 'edit') {
        // capture the details of the relationship clicked by the user, clean it if needed and send for use
        // hit the update relation service and updae it in visJS too
        const relationData = _.cloneDeep(event.data);
        if (relationData.hasOwnProperty('id') && relationData.hasOwnProperty('type')) {
          // object has atleast id and type key, move ahead
          this.graphService.updateRelation(relationData).subscribe(response => {
            const newRelation = response['seperateEdges'][0];
            this.updateRelationinVIS(newRelation);
            this.snackBar.success({message: this.RELATION_UPDATE_TEXT_SUCCESS});
          }, err => {
            console.error('An error occured while reading the updated relation data', err);
            this.snackBar.error({message: this.RELATION_UPDATE_TEXT_ERROR});
          });
        }
      } else if (event.action === 'delete') {
        // handle the functionality of deleting the node
        let relationID = null;
        // capture the relation id and send delete request
        if (event.data.hasOwnProperty('id')) {
          relationID = event.data.id;
          // create the delete request
          let requestObj = {
            id: relationID
          };
          this.graphService.deleteRelation(requestObj).subscribe(response => {
            console.log('recieved some response', response['seperateEdges']);
            // once database relation is deleted, remove it from visGraph also
            let deletedRel = _.cloneDeep(response['seperateEdges'])
            // update all+filtered graph array
            let eleObj: elementOperation = {
              element: 'edges',
              event: "delete",
              data: response['seperateEdges']
            };
            this.updateGraphArray(eleObj);
            if (this.showDeletedData) {
              deletedRel['color']['color'] = this.colorConfig['deletedColor']['colorCode'];
              deletedRel['color']['highlight'] = this.colorConfig['deletedColor']['highlightColorCode'];
              this.graphData['edges'].update([deletedRel]);
            } else {
              this.graphData['edges'].remove([deletedRel]);
            }
            this.hideDelModal = true;
            this.snackBar.success({message: this.RELATION_DELETE_TEXT_SUCCESS});
          }, err => {
            console.error('An error occured while reading response for relation delete ', err);
            this.snackBar.error({message: this.RELATION_DELETE_TEXT_ERROR});
          });
        } else {
          console.warn('did not recieve the id of relation for deletion in edgeEventCapture');
        }
      } else {
        // invalid click event
        console.error('An invalid click event retrieved ', event);
      }
    }
  }

  updateNodesInVis(nodesArray) {
    // update the nodes in the data set
    if (Array.isArray(nodesArray)) {
      nodesArray.forEach(node => {
        let oldNodeID = node['id'];
        let oldNode = this.graphData['nodes'].get(oldNodeID);
        // update the old node with new node
        if (!!oldNode) {
          oldNode['properties'] = node['properties'];
          oldNode = this.addNodeColor(node);
          // update all+filtered graph array
          let eleObj: elementOperation = {
            element: 'nodes',
            event: "restore",
            data: oldNode
          };
          this.updateGraphArray(eleObj);
          // update sidebar name
          this.newNodeCreated.emit({ event: "NodeEvent_restore_" + node['label'] });
          // set it back in VISJS
          this.graphData['nodes'].update(oldNode);
          console.log('updated node ', oldNode);
        } else {
          console.error(`Provided node ${oldNode} is not present in VisGraph for restoration`);
        }
      });
    } else {
      console.error('Non array provided in updateNodesInVis');
    }
  }

  updateRelationinVIS(relation) {
    let oldRelationID = relation['id'];
    let oldRelation = this.graphData['edges'].get(oldRelationID);
    console.log('old relation is  ', oldRelation);
    if (this.showDeletedData) {
      this.graphData['edges'].update([relation]);
    } else {
      let tem = _.cloneDeep(relation);
      tem['title'] = this.stringifyProperties(tem);
      this.graphData['edges'].update([tem]);
    }
    // update all+filtered graph array
    let eleObj: elementOperation = {
      element: "edges",
      event: "edit",
      data: relation
    };
    this.updateGraphArray(eleObj);
  }

  updateRelationsInVis(relationArray) {
    // update the relations present in the dataset
    if (Array.isArray(relationArray)) {
      relationArray.forEach(relation => {
        let oldRelationID = relation['id'];
        let oldRelation = this.graphData['edges'].get(oldRelationID);
        // update the old node with new node
        if (!!oldRelation) {
          oldRelation['properties'] = relation['properties'];
          oldRelation['title'] = relation['title'];
          oldRelation['color']['color'] = this.colorConfig['restoreColor']['colorCode'];
          oldRelation['color']['highlight'] = this.colorConfig['restoreColor']['highlightColorCode'];
          // set it back in VisJS
          this.graphData['edges'].update(oldRelation);
          // update all+filtered graph array
          let eleObj: elementOperation = {
            element: 'edges',
            event: "restore",
            data: oldRelation
          };
          this.updateGraphArray(eleObj);
          console.log('updated relation ', oldRelation);
        } else {
          console.error(`Provided relation ${oldRelation} is not present in VisGraph for restoration`);
        }
      });
    } else {
      console.error('Non array provided in updateNodesInVis');
    }
  }

  // to change key in tooltip
  stringifyProperties(propertyObject) {
    if (propertyObject.constructor === Object) {
      let finalString = '';
      if (propertyObject['properties'].hasOwnProperty('deleted')) {
        Object.keys(propertyObject['properties']).filter(key => {
          if (key !== 'deleted' && key !== 'color') {
            finalString += `<strong>${key} :</strong> ${propertyObject['properties'][key]} <br>`;
          }
        });
      }
      return finalString;
    } else { return propertyObject['title']; }
  }

  addData(node, clickEvent, event) {
    node['x'] = clickEvent.pointer.canvas.x;
    node['y'] = clickEvent.pointer.canvas.y;
    node['color'] = this.colorConfig['defaultColor'][event.data.type];
    return node;
  }

  addNodeColor(node) {
    const colorCode = this.colorConfig['defaultColor'][node.type[0]] || null;
    if (colorCode) {
      node['color'] = colorCode;
      return node;
    } else {
      node = this.shiftColorKey(node);
      if (!node['properties'].hasOwnProperty('color')) {
        console.warn('Error while adding color to the node ', node['label']);
      }
      return node;
    }
  }

  startEditProcess(clickedData, typeProcess = 'node') {
    // to extract relevant information and send it back to the edit modal
    console.log(clickedData);
    if (typeProcess === 'node') {
      this.editRelationData = null;
      this.editNodeData = clickedData;
    } else if (typeProcess === 'edge') {
      this.editNodeData = null;
      this.editRelationData = clickedData;
    }
  }

  getNodeDetails(nodeIDs) {
    // process node IDs and send back
    const changedNodeIDs = nodeIDs.map(nodeID => {
      return this.graphData['nodes'].get(nodeID);
    });
    return changedNodeIDs;
  }


  doubleClickHandler(event) {
    // if nodes array exists, it is a node edit event else it is edge edit event
    if (!!event.nodes.length) {
      // emit node edit event data
      let clickedNode = this.graphData['nodes'].get(event.nodes);
      // if there are multiple nodes one above another, always select the top most one
      if (clickedNode.length > 0) {
        clickedNode = _.cloneDeep(clickedNode[0]);
      }
      console.log('clicked Node is ', clickedNode);
      this.startEditProcess(clickedNode);
    } else if (!!event.edges.length) {
      // emit edge edit event data
      if (event.nodes.length > 0) {
        // user clicked on node despite selecting 'edit edge' feature
        alert('Please click on an edge not a node');
      } else {
        let clickedEdge = this.graphData['edges'].get(event.edges[0]);
        // if there are multiple nodes one above another, always select the top most one
        if ([clickedEdge].length > 0) {
          clickedEdge = _.cloneDeep([clickedEdge][0]);
        }
        console.log('clicked Edge is ', clickedEdge);
        // emit data for edge
        this.startEditProcess(clickedEdge, 'edge');
      }
    }
  }

  // to filter data from alldata array and store it to new array
  setFilteredData(isDeletedToggle = false) {
    this.filteredGraphData['nodes'] = [];
    this.filteredGraphData['edges'] = [];
    this.allGraphData['nodes'].filter(node => {
      if (node['properties']['deleted'] === "false" || node['properties']['deleted'] === false) {
        let tem = _.cloneDeep(node);
        if (isDeletedToggle) {
          delete tem['color'];
        }
        tem['title'] = this.stringifyProperties(tem);
        this.filteredGraphData['nodes'].push(tem);
      }
    });
    this.allGraphData['edges'].filter(edge => {
      if (edge['properties']['deleted'] === "false" || edge['properties']['deleted'] === false) {
        let tem = _.cloneDeep(edge);
        tem['title'] = this.stringifyProperties(tem);
        this.filteredGraphData['edges'].push(tem);
      }
    });
  }

  // to show all data
  showAllData() {
    // create dataset for all data 
    this.graphData['nodes'] = new DataSet(this.allGraphData['nodes']);
    this.graphData['edges'] = new DataSet(this.allGraphData['edges']);
    // to count graph element
    this.selectedCount = this.graphData['nodes'].length;
    // display data
    this.reinitializeGraph();
    this.loader = false;

  }

  // to show filtered data
  showFilteredData() {
    // create dataset for filtered graph data
    this.graphData['nodes'] = new DataSet(this.filteredGraphData['nodes']);
    this.graphData['edges'] = new DataSet(this.filteredGraphData['edges']);
    // to count graph element
    this.selectedCount = this.graphData['nodes'].length;
    // display data
    this.reinitializeGraph();
    this.loader = false;
  }

  cleanPropertyBindingData(cleanType) {
    if (
      this.editNodeData !== null || this.editRelationData !== null ||
      this.promptRelationCreateAfterNode !== null || this.restoredData !== null
    ) {
      console.log('cleaning data for ', cleanType);
      if (!!cleanType) {
        if (cleanType === 'node') {
          this.editNodeData = null;
        } else if (cleanType === 'relation') {
          this.editRelationData = null;
        } else if (cleanType === 'afterCreateNode') {
          this.promptRelationCreateAfterNode = null
        } else if (cleanType === 'restore') {
          this.restoredData = null;
        }
        else {
          // nothing
        }
      }
    }
  }

  initRestoreData(restoreDataObj) {
    // this.loader = true;
    if (Object.keys(restoreDataObj).length > 0 && restoreDataObj.hasOwnProperty('type') && restoreDataObj.hasOwnProperty('data')) {

      let requestBodyObj = { nodes: [], relations: [] };

      if (restoreDataObj['type'] === 'node_relation') {
        // the data key should have both node and relation key with id array key inside them
        if (Object.keys(restoreDataObj['data']).length > 0 && Object.keys(restoreDataObj['data']).length <= 2) {
          if (restoreDataObj['data'].hasOwnProperty('node') &&
            restoreDataObj['data']['node'].hasOwnProperty('id') &&
            Array.isArray(restoreDataObj['data']['node']['id'])
          ) {
            requestBodyObj.nodes = _.cloneDeep(restoreDataObj['data']['node']['id']);
          } else {
            // the data object does not have valid node key or id key
            console.error('the data object does not have valid node key or id key for initRestoreData');
          }
          if (restoreDataObj['data'].hasOwnProperty('relation') &&
            restoreDataObj['data']['relation'].hasOwnProperty('id') &&
            Array.isArray(restoreDataObj['data']['relation']['id'])
          ) {
            requestBodyObj.nodes = _.cloneDeep(restoreDataObj['data']['relation']['id']);
          } else {
            // the data object does not have valid relation key or id key
            console.error('the data object does not have valid relation key or id key for relation in initRestoreData');
          }
        } else {
          // providing irrelevant number of keys to the api in the data object
          console.error('irrelevant number of keys to the api in the data object in initRestoreData');
        }
      } else {
        if (restoreDataObj['type'] === 'node' && restoreDataObj['data'].hasOwnProperty('id')) {
          requestBodyObj.nodes = [restoreDataObj['data']['id']];
        }
        if (restoreDataObj['type'] === 'relation' && restoreDataObj['data'].hasOwnProperty('id')) {
          requestBodyObj.relations = [restoreDataObj['data']['id']];
        }
      }

      // requestBody has been prepared
      console.log('final request body is ', requestBodyObj);
      this.graphService.restoreData(requestBodyObj).subscribe(response => {
        // once the response if okay, send back the confirmation to the create nodes
        let finalData = {
          nodes: response['seperateNodes'],
          relations: response['seperateEdges']
        };
        // update the nodes / relations in the visJS graph also and finally tell the modal to go away
        let processedResponse = this.updateRestoreDataInVis(finalData);
        if (processedResponse.constructor === Boolean && processedResponse) {
          // this will be executed when a node has been restored
          this.restoredData = _.cloneDeep(finalData);
        } else {
          this.restoredData = null;
          this.loader = false;
        }
        this.snackBar.success({message: this.DATA_RESTORE_TEXT_SUCCESS});
      }, error => {
        console.error('An error occured while restoring the data from the API');
        console.log(error);
        this.loader = false;
        this.snackBar.error({message: this.DATA_RESTORE_TEXT_ERROR});
      });
    } else {
      console.error('Did not recieve any valid object data for restore');
      this.loader = false;
    }
  }

  updateRestoreDataInVis(restoredDataObj) {
    try {
      if (restoredDataObj.hasOwnProperty('nodes') && !!restoredDataObj['nodes'] && restoredDataObj['nodes'].length > 0) {
        this.updateNodesInVis(restoredDataObj['nodes']);
      }
      if (restoredDataObj.hasOwnProperty('relations') && !!restoredDataObj['relations'] && restoredDataObj['relations'].length > 0) {
        this.updateRelationsInVis(restoredDataObj['relations']);
      }
      return true;
    } catch (e) {
      console.error('An error occured while updating visJS in updateRestoreDataInVis function ', e);
      return false;
    }
    // the purpose of the function is to update the nodes / relations in VisJS dataSet
  }

  // to update allGraphData and filteredGraphData
  updateGraphArray(obj: elementOperation): void {
    try {
      if (obj.hasOwnProperty('event') && obj.event === 'create') {
        // verify if color property is present and add it as is
        obj.data = this.shiftColorKey(obj.data);
        this.insertIntoAllGraphArray(obj);
        this.insertIntoFilteredGraphArray(obj);
      } else if (obj.hasOwnProperty('event') && obj.event === 'edit' || obj.event === 'delete' || obj.event === 'restore') {
        this.updateAllGraphArray(obj);
        this.updateFilteredGraphArray(obj);
      }
    } catch (e) {
      console.log("Method : updateGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
    }

  }

  // update allgraphdata array
  updateAllGraphArray(obj: elementOperation): void {
    try {
      if (obj.hasOwnProperty('data')) {
        let index;
        // update in all graph data array
        if (obj.hasOwnProperty('element') && obj.element === 'nodes') {
          // for node
          if (obj.hasOwnProperty('event') && obj.event === 'delete') {
            obj.data['color'] = this.colorConfig['deletedColor']['colorCode'];
          }
          index = _.findIndex(this.allGraphData[obj.element], { label: obj.data['label'] });
        } else if (obj.hasOwnProperty('element') && obj.element === 'edges') {
          // for edge
          if (obj.hasOwnProperty('event') && obj.event === 'delete') {
            obj.data['color']['color'] = this.colorConfig['deletedColor']['colorCode'];
            obj.data['color']['highlight'] = this.colorConfig['deletedColor']['highlightColorCode'];
          }
          index = _.findIndex(this.allGraphData[obj.element], { id: obj.data['id'] })
        }
        if (index >= 0) {
          // update in array
          this.allGraphData[obj.element][index] = obj.data;
        }
      }
    } catch (e) {
      console.log("Method : updateAllGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
    }
  }

  // update filteredgrapdata garray
  updateFilteredGraphArray(obj: elementOperation): void {
    try {
      if (obj.hasOwnProperty('data')) {
        let index;
        // update in all graph data array
        if (obj.hasOwnProperty('element') && obj.element === 'nodes') {
          index = _.findIndex(this.filteredGraphData[obj.element], { label: obj.data['label'] });
        } else if (obj.hasOwnProperty('element') && obj.element === 'edges') {
          // remove deleted edge from filtered data array
          index = _.findIndex(this.filteredGraphData[obj.element], { id: obj.data['id'] })
        }
        if (index >= 0) {
          if (obj.hasOwnProperty('event') && obj.event === 'delete') {
            this.filteredGraphData[obj.element].splice(index, 1);
          } else if (obj.hasOwnProperty('event') && obj.event === 'edit') {
            // update filterd graph data
            let tem = _.cloneDeep(obj.data);
            tem['title'] = this.stringifyProperties(tem);
            this.filteredGraphData[obj.element][index] = tem;
          }
        } else if (obj.hasOwnProperty('event') && obj.event === 'restore') {
          this.insertIntoFilteredGraphArray(obj);
        }
      }
    } catch (e) {
      console.log("Method : updateFilteredGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
    }
  }

  // insert into allgraphdata array
  insertIntoAllGraphArray(obj: elementOperation): void {
    try {
      if (obj.hasOwnProperty('data') && obj.hasOwnProperty('element')) {
        this.allGraphData[obj.element].push(obj.data);
      }
    } catch (e) {
      console.log("Method : insertIntoAllGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
    }
  }

  shiftColorKey(elementObject, previousObject = null) {
    // To add a new color key in the root level if color is present in properties key
    if (elementObject.hasOwnProperty('properties') && elementObject['properties'].hasOwnProperty('color')) {
      elementObject['color'] = elementObject['properties']['color'];
      return elementObject;
    } else if (previousObject !== null) {
      return previousObject;
    } else {
      return elementObject;
    }
  }

  // insert into filtered graph array
  insertIntoFilteredGraphArray(obj: elementOperation): void {
    try {
      if (obj.hasOwnProperty('data') && obj.hasOwnProperty('element')) {
        let tem = _.cloneDeep(obj.data);
        tem['title'] = this.stringifyProperties(tem);
        this.filteredGraphData[obj.element].push(tem);
      }
    } catch (e) {
      console.log("Method : insertIntoFilteredGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
    }
  }
}
