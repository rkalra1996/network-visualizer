import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import { SharedGraphService } from 'src/app/modules/core/services/shared-graph.service';
import { forkJoin, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { SearchService } from 'src/app/modules/shared/services/search-service/search.service';
import { ToolbarSharedService } from 'src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})

export class DashboardSidebarComponent implements OnInit, OnChanges {

  @Input() newNodeCreated: string;
  // tslint:disable-next-line: no-input-rename
  @Input('nodeLimitEnterEvent') nodeLimitOnEnter: any = null;
  private showDisabled = false;
  defaultColor = {
    Academia: 'c_ff4444',
    Consulting: 'c_ffbb33',
    Government: 'c_00C851',
    'Impact Investor': 'c_33b5e5',
    'International Agency': 'c_CC0000',
    Media: 'c_FF8800',
    'NGO/CBO': 'c_007E33',
    People: 'c_0099CC',
    Philanthropy: 'c_9933CC',
    Platform: 'c_0d47a1',
    'Private Sector': 'c_2BBBAD',
    'Research Institute': 'c_c51162'
  };
  @Output() eventClicked = new EventEmitter<object>();
  @Output() nodeTypesEvent = new EventEmitter<Array<any>>();
  public relationOptions: Array<string> = [];
  public selectedRelationship: { type: string }[] = [];
  public selectedRelation: Array<string> = [];
  public selectedAttributeOptions: Array<object> = [];;
  public selectedGraph: { type: string, value: Array<string> }[] = [];
  public graphData = {};
  public relstatus = false;
  public preSelectedRel: string;

  public edgesNewObject: { type: string, nodeid: Array<number> }[] = [];
  public nodesNewObject: { type: string, nodeid: Array<number> }[] = [];
  public graphInitData: Array<object> = [];

  public totalNodesProperties = {};
  public totalRelationsProperties = {};
  public processedData;
  public nodeTypes2: Array<any> = [];

  public relationTypeOptions: Array<any> = [];
  public relationsData: any;
  public totalAtrributeOptions: Array<object> = [];
  // Query to fetch all labels
  public queryObj = {
    raw: true,
    query: `MATCH (p) WITH DISTINCT keys(p) AS keys,p
     with DISTINCT labels(p) as label,keys 
     UNWIND keys AS keyslisting WITH DISTINCT keyslisting AS allfields,label
     RETURN collect(allfields),label`
  };

  public properties : Observable<boolean>;
  public types : Observable<boolean>;

  private nodeRelationsDetailsObject: {nodes: object, relations: object} = {nodes: {}, relations: {}};
  constructor(
    private graphDataService: GraphDataService, private sharedGraphData: SharedGraphService,
    private searchService: SearchService, private toolbarShrdSrvc: ToolbarSharedService) { }

  ngOnInit() {
    this.getGraph();
  }

  ngOnChanges() {
    // update all dropdown when new node is created
    // get the createdEvent
    if (this.newNodeCreated) {
      const nodeData = this.newNodeCreated['event'].split('_');
      const nodeEvent = this.newNodeCreated['event'].split('_')[0];

      if (nodeEvent === 'NodeEvent') {
        if(nodeData[1] === 'restore') {
          this.updateSidebar(nodeData[2]);
        } else {
          this.getGraph();
          this.newNodeCreated = '';
        }
      }
    }
    // detect if the user hit enter while entering the nodelimit value
    if (!!this.nodeLimitOnEnter && !isNaN(this.nodeLimitOnEnter)) {
      // user pressed entered after filling a valid number
      console.log('enter detected after ', this.nodeLimitOnEnter);
      this.searchGraph();
    }
  }

  /**
   * Updates node relation details object
   * @description This function updates the global nodeRelationDetails object and send it to algo runner for further use
   * @param detailsObj
   */
  // tslint:disable-next-line: max-line-length
  updateNodeRelationDetailsObject(detailsObj: {nodeTypes?: object, relationTypes?: any, nodeProperties?: object, relationProperties?: object}) {
    if (detailsObj.hasOwnProperty('nodeTypes')) {
      this.nodeRelationsDetailsObject.nodes['types'] = detailsObj.nodeTypes;
    }
    if (detailsObj.hasOwnProperty('relationTypes')) {
      this.nodeRelationsDetailsObject.relations['types'] = detailsObj.relationTypes;
    }
    if (detailsObj.hasOwnProperty('nodeProperties')) {
      this.nodeRelationsDetailsObject.nodes['properties'] = detailsObj.nodeProperties;
    }
    if (detailsObj.hasOwnProperty('relationProperties')) {
      this.nodeRelationsDetailsObject.relations['properties'] = detailsObj.relationProperties;
    }
    // send it to algo runner
    this.toolbarShrdSrvc.sendNodeRelationDetails(this.nodeRelationsDetailsObject);
    this.toolbarShrdSrvc.sendNodeRelationDetailsStatic(this.nodeRelationsDetailsObject);
  }

  // set all data in sidebar dropdown
  getGraph() {
    this.totalAtrributeOptions = [];
    // fetch the properties of all the nodes and relationships
    forkJoin([this.graphDataService.getGraphProperties(), this.getNodeTypes()]).subscribe(results =>{
      this.updateNodeRelationDetailsObject({
        nodeTypes: results[1],
        nodeProperties: results[0]['nodes'],
        relationProperties: results[0]['relations']}
        );
      // results[0] is our character
      // results[1] is our character homeworld
      if(results[0].hasOwnProperty('nodes')){
        // push name to top
        this.setNodeProperties(results[0]);
        let index = this.totalAtrributeOptions.findIndex(obj => obj['attribute'] === "Name")
        this.totalAtrributeOptions = _.cloneDeep(this.swap(this.totalAtrributeOptions, index, 0));
      }
      if(results[1].length > 0){
        // push type to second position
        this.setTypes(results[1]);
        let index = this.totalAtrributeOptions.findIndex(obj => obj['attribute'] === "Type")
        this.totalAtrributeOptions = _.cloneDeep(this.swap(this.totalAtrributeOptions, index, 1));
      }
    }, err => {
      throwError({error : 'Error while reading graph properties'});
      console.error(err);
    });
    this.getRelationTypes().subscribe(response => {
      // this.graphInitData.push(data);
      this.relationOptions = this.relationTypeOptions;
      this.updateNodeRelationDetailsObject({relationTypes: this.relationTypeOptions});
    });
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  /**
   * Search graph
   * @description The function gets called whenever the apply filter on attributes is needed
   */
  searchGraph() {
    let requestBody;
    this.selectedGraph = [];
    if (this.selectedAttributeOptions) {
      Object.keys(this.selectedAttributeOptions).forEach(selectedKey => {
        if (this.selectedAttributeOptions[selectedKey].length > 0) {
          this.selectedGraph.push({ type: selectedKey, value: this.selectedAttributeOptions[selectedKey] });
        }
      });
      if (this.selectedGraph.length > 0) {
        requestBody = { nodes: this.selectedGraph };
      } else {
        // if no selected element
        requestBody = {};
      }
    }
    return requestBody;
  }

  // Method gives new edgesArray with related node ids
  getRelatedNodeIdArrayFromEdges(selectedNodeId) {
    if (this.graphInitData.length > 0) {
      // console.log('rel',this.relationOptions);
      let temArray = [];
      this.graphInitData[0]['seperateEdges'].filter(edge => {
        if (selectedNodeId === edge.from) {
          temArray.push(edge.to);
        } else if (selectedNodeId === edge.to) {
          temArray.push(edge.from);
        }
      });
      temArray = temArray.filter(this.onlyUnique);
      return temArray;
    }
  }
  // Method gives selected node id
  getSelectedNodeId(nodeName) {
    let temId;
    if (this.graphInitData.length > 0) {
      this.graphInitData[0]['seperateNodes'].filter(node => {
        if (nodeName === node.label) {
          temId = node.id;
        }
      });
      return temId;
    }
  }

  resetGraph() {
    this.getGraph();
    this.selectedAttributeOptions = [];
    this.selectedRelation = [];
    if (this.preSelectedRel) {
      let element = document.getElementById(this.preSelectedRel);
      element.classList.remove('selected');
    }
    const obj = { event: 'reset' };
    this.eventClicked.emit(obj);
  }


  relationclickEvent(selectedRelation) {
    let element;
    if ( this.preSelectedRel) {
      element = document.getElementById(this.preSelectedRel);
      element.classList.remove('selected');
    }

    element = document.getElementById(selectedRelation);
    element.classList.add('selected');

    this.selectedRelationship = [];
    this.relstatus = !this.relstatus;
    this.selectedRelationship.push({ type: selectedRelation });
    let requestBody = { nodes: [], edges: this.selectedRelationship };
    console.log("re", requestBody);
    this.sharedGraphData.setGraphData(requestBody);
    const obj = { event: 'search' };
    this.eventClicked.emit(obj);
    this.preSelectedRel = selectedRelation;
  }

  // return all nodes with selected relation
  relationSearchGraph() {
    let requestBody;
    if (this.selectedRelation.length > 0) {
      this.selectedRelationship = [];
      this.selectedRelation.map(rel => {
        this.selectedRelationship.push({ type: rel });
      });
      requestBody = { nodes: [], edges: this.selectedRelationship };
    } else {
      // if no selected element
      requestBody = {};
    }
    return requestBody;
  }

  networkElementClick(element) { }


  //
  NodeLimitToggleHandler(event) {
    try {
      if (event.constructor === Object) {
        this.showDisabled = event['isOn'];
      }
    } catch (e) {
      this.showDisabled = false;
    }
    this.sharedGraphData.sendToogleStatus(this.showDisabled);
  }


  extractLabels(data) {
    this.nodeTypes2 = [];
    data.forEach(label => {
      this.nodeTypes2.push(label.type[0]);
    });
    // console.log('types are ', this.nodeTypes2);
  }


  getNodeTypes() {
    return this.searchService.runQuery(this.queryObj).pipe(map(data => {
      console.log('recieved label data from service ', data);
      this.processedData = this.processData(data);
      // extract types from the array
      this.extractLabels(this.processedData);
      // this.typeOptions = _.cloneDeep(this.nodeTypes2);
      return this.nodeTypes2;
    }));
  }
  processData(data) {
    if (data.length > 0) {
      let tempData = [];
      data.forEach(label => {
        tempData.push({ type: label._fields[1], properties: label._fields[0] });
      });
      return tempData;
    } else {
      return [];
    }
  }

  getRelationTypes() {
    return this.graphDataService.getGraphRelations().pipe(map(response => {

      this.relationsData = this.filterRelationsData(response);
      let extractedTypes = this.extractTypes(this.relationsData);
      // pass it into the options for dropdown
      this.relationTypeOptions = _.cloneDeep(extractedTypes);
      this.sharedGraphData.setRelationTypeOptions(this.relationTypeOptions);
      this.sharedGraphData.setRelationsData(this.relationsData);
      return true;
    }, err => {
      console.error('An error occured while fetching relations ', err);
      throw Error();
    }));
  }

  filterRelationsData(response) {
    let filteredObjectArray = [];
    filteredObjectArray.push(response[0]);
    response.splice(0, 1);
    // clear relations response as there are duplicates inside
    // steps to clear, process each relation type
    // find all the keys which are of this type and collect its properties into a unique array of objects
    let i = 0;
    while (i <= response.length) {
      if (response.length === 0) {
        i = 1;
      } else {
        let matched = false;
        filteredObjectArray.forEach(firstObj => {
          if (firstObj.type === response[i].type) {
            matched = true;
            firstObj['properties'].push(...response[i].properties);
          }
        });
        if (matched) {
          response.splice(i, 1);
          i = 0;
        } else {
          filteredObjectArray.push(response[i]);
          response.splice(i, 1);
        }
      }
    }
    // make the properties of each type as unique
    filteredObjectArray.map(typeObj => {
      typeObj['properties'] = _.uniq(typeObj['properties']);
      return typeObj;
    });
    console.log('final fetched types for relation is ', filteredObjectArray);
    return filteredObjectArray;
  }

  extractTypes(ObjectArray: any): any {
    let typesArray = [];
    ObjectArray.forEach(obj => {
      typesArray.push(obj['type']);
    });
    return typesArray;
  }

  swap(ArrayForSwapping, swapFromIndex, swapToIndex) {
    let temArrayForSwapping = _.cloneDeep(ArrayForSwapping);
    const temp = temArrayForSwapping[swapFromIndex];
    temArrayForSwapping[swapFromIndex] = temArrayForSwapping[swapToIndex];
    temArrayForSwapping[swapToIndex] = temp;
    return temArrayForSwapping;
  }

  updateSidebar(nodeData){
    if(nodeData){
      const index = this.totalAtrributeOptions.findIndex(obj => obj['attribute'] === 'Name');
      this.totalAtrributeOptions[index]['options'].push(nodeData);
    }
  }

  // check for rotate object
  checkRotate() {
        // check for selected value so the dropdown should not close on refresh
        if(this.selectedAttributeOptions){
          Object.keys(this.selectedAttributeOptions).forEach(selectedKey => {
            if (this.selectedAttributeOptions[selectedKey].length > 0) {
              this.totalAtrributeOptions = this.totalAtrributeOptions.filter(attr => {
                if (attr && attr['attribute'] === selectedKey) {
                  attr['rotate'] = true;
                  return attr;
                } else {
                  return attr;
                }
              })
            }
        });
      }
  }

  // for node properties
  setNodeProperties(response){
        if (response.hasOwnProperty('nodes')) {
          this.totalNodesProperties = _.cloneDeep(response['nodes']);
          this.sharedGraphData.setNodeProperties(this.totalNodesProperties);
          if (this.totalNodesProperties) {
            Object.keys(this.totalNodesProperties).forEach(keyName => {
              if (keyName !== 'deleted' && keyName !== 'color') {
                this.totalAtrributeOptions.push({ attribute: keyName, options: this.totalNodesProperties[keyName], rotate: false });
              }
            });
          }
          if (response.hasOwnProperty('relations')) {
            this.totalRelationsProperties = _.cloneDeep(response['relations']);
            this.sharedGraphData.setRelationProperties(this.totalRelationsProperties);
          }
          console.log(this.totalNodesProperties, this.totalRelationsProperties);
        }
        this.checkRotate();
  }

  // for types
  setTypes(response) {
    if(response) {
      this.sharedGraphData.setProcessedData(this.processedData);
      this.sharedGraphData.setNodeTypes2(this.nodeTypes2);
      // this.typeOptions = this.nodeTypes2;
      this.totalAtrributeOptions.push({ attribute: 'Type', options: this.nodeTypes2, rotate: false });
      this.checkRotate();
      return true;
    }
  }


  /**
   * Hits search graph
   * @description The function is a common function which will gather the selected filters from the sidebar and send it furthur
   */
  hitSearchGraph() {

    const selectedAttributes = this.searchGraph();
    const selectedRelations = this.relationSearchGraph();

    console.log('search graph and relation search graph has returned the following ');
    console.log(selectedAttributes);
    console.log(selectedRelations);

    // join both the request bodies into one and send it for search

    const RequestBody = Object.assign({}, selectedRelations, selectedAttributes);

    this.sharedGraphData.setGraphData(RequestBody);
    // send the click event to reload the graph
    const obj = { event: 'search' };
    this.eventClicked.emit(obj);
  }
}
