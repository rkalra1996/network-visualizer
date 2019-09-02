import {
  Component, OnInit, EventEmitter, Output, 
  Input, OnChanges, SimpleChanges,DoCheck
} from '@angular/core';

import {SearchService} from './../../../shared/services/search-service/search.service';
import * as _ from 'lodash';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import { map} from 'rxjs/operators';

import { SharedGraphService } from './../../../core/services/shared-graph.service';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import {MaterialService} from './../../../custom-material/services/material-core/material.service';

declare var $: any;

@Component({
  selector: 'app-create-nodes',
  templateUrl: './create-nodes.component.html',
  styleUrls: ['./create-nodes.component.scss']
})

export class CreateNodesComponent implements OnInit, OnChanges, DoCheck {

  // Output variables for event emitters to parent components
  @Output() nodeBtnEvent = new EventEmitter<any>();
  @Output() edgeBtnEvent = new EventEmitter<any>();
  @Output() cleanData = new EventEmitter<string>();
  @Output() restoreEvent = new EventEmitter<any>();
  // input variables from parent components
  @Input() editData: any;
  @Input() editRelData: any;
  @Input() hideDelModal: any;
  @Input() nodeTypes: Array<any> = [];
  @Input() newNodeCreated: object | null = null;
  @Input() restoredDataResponse: object | null = null;
  // constants
  public TYPE_TEXT = 'Type';
  public ADD_NEW_LABEL = 'Add New Label';
  public ADD_NEW_TYPE = 'Add New Type';
  public ADD_NEW_PROPERTY = 'Add New Property';
  public toolTipText = '';
  public deleteContext = 'node';
  public newNodeName = 'Not Available';
  public newTypeColor: string | null = null;
  // object to handle modals
  public popupConfig = {
    createNodePopup: false,
    editNodePopup: false,
    deleteNodePopup: false,
    createRelationPopup: false,
    editRelationPopup: false,
    deleteRelationPopup: false
  };

  // modal specific variables
    public createNodePopup = false;
    public editNodePopup = false;
    public deleteNodePopup = false;
    public createRelationPopup = false;
    public editRelationPopup = false;
    public deleteRelationPopup = false;
    public restoreOptions = false;

    public disabledBox = false;
    public enableNewTemplate = false;
    public clickedNodeID = null;
    public clickedRelationID = null;
    public disabledFromBox = false;
    public disabledToBox = false;
    public relationSourceNode = null;
    public relationTargetNode = null;
    public nodeTypes2: Array<any> = [];
    public selectedType: any = [];
    public typeOptions: Array<any> = [];
    public processedData;
    public labelProperties = [];
    public relationTypeOptions: Array<any> = [];
    public typeProperties: any[] = [];
    public relationsData: any;
    public toNames: any[] = [];
    public fromNames: any[] = [];
    public selectedNodeNameSource: any;
    public selectedNodeNameTarget: any;
    public editNodeConfig = {};
    public deleteNodeConfig = {};
    public totalNodesProperties = {};
    public totalRelationsProperties = {};
    public availablePropertyList = {};
    public selectedPropertiesObject = {};
    public showDeletedData = false;
    public totalName = [];

    // private variables to be used by the class
    private allowedRestoreEvents = ['node','relation'];
    constructor(
      private SharedSrvc: SearchService,
      private graphSrvc: GraphDataService,
      private sharedGraphSrvc: SharedGraphService,
      private fb: FormBuilder,
      private snackbar: MaterialService) {
    }

  ngOnInit() {
    this.toolTipText = 'The Properties section can be left blank to set a default Node';
    $('.toolTipText').tooltip();
    // to set total node and relation properties
    this.sharedGraphSrvc.totalNodesProperties.subscribe(data=>{
      if(data){
        this.totalNodesProperties = _.cloneDeep(data);
        this.totalName = this.totalNodesProperties['Name'];
        // to change format for lookup option
        this.totalName = this.totalName.map(name => {
          return { key: name };
        });
      }
    });
    this.sharedGraphSrvc.totalRelationsProperties.subscribe(data=>{
      this.totalRelationsProperties = data;
    });
    // to set processedData and nodeTypes2
    this.sharedGraphSrvc.processedData.subscribe(data=>{
      this.processedData = data;
    })
    this.sharedGraphSrvc.nodeTypes2.subscribe(data=>{
      this.nodeTypes2 = data;
    })
    this.sharedGraphSrvc.relationTypeOptions.subscribe(data=>{
      this.relationTypeOptions = data;
    })
    this.sharedGraphSrvc.relationsData.subscribe(data=>{
      this.relationsData = data;
    })

    this.sharedGraphSrvc.showDeletedData.subscribe(toggle => {
      if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
        // if the toggle variable is  only true and false and nothing else
        this.showDeletedData = toggle;
        // console.log('recieved toggle in create nodes', toggle);
      } else {
        // set to false by default
        this.showDeletedData = false;
      }
    }, err => {
      // set to false by default
      console.error('An error occured while subscribing to the toggle for deleted data', err);
      this.showDeletedData = false;
    });
  }


  createNode() {
    this.popupConfig.createNodePopup = true;
    this.createNodePopup = true;
    this.disabledBox = false;
    this.enableNewTemplate = false;
      let index = this.nodeTypes2.indexOf(this.ADD_NEW_LABEL);
      if(index < 0){
        let newOptions = this.nodeTypes2;
        newOptions = this.pushOnTop(this.ADD_NEW_LABEL, newOptions);
        this.typeOptions = _.cloneDeep(newOptions);
      }
      // add the option to add a new label on top
    
  }

  pushOnTop(valueToAdd = 'null', ArrayToUse, index = 0) {
    // this function will push the given value in the array at specified index, default for 0
    if (ArrayToUse.length <= 0) {
      return [];
    }
    if (valueToAdd === 'null' && ArrayToUse.length > 0) {
      return ArrayToUse;
    }
    if (valueToAdd !== 'null' && ArrayToUse.length >= 0) {
      ArrayToUse.splice(index, 0, valueToAdd);
      return ArrayToUse;
    }
  }
  editNode() {
    this.disabledBox = true;
    // this will send the edit event and then the app will wait for the node click event sent back to this component
    this.nodeBtnEvent.emit({ type: 'click', action: 'edit' });
  }

  createRelation() {
    this.setAllToFalse('relation');
    this.popupConfig.createRelationPopup = _.cloneDeep(true);
    this.createRelationPopup = true;
    this.enableNewTemplate = false;
    this.disabledBox = false;
      let extractedTypes = this.relationTypeOptions;
      // add the new type option on top
      let index = extractedTypes.indexOf(this.ADD_NEW_TYPE);
      if(index < 0){
        extractedTypes = this.pushOnTop(this.ADD_NEW_TYPE, extractedTypes);
      }
      // pass it into the options for dropdown
      this.relationTypeOptions = _.cloneDeep(extractedTypes);
      return true;
    console.log('variables values are ', this.popupConfig.createRelationPopup + ' ' + this.createRelationPopup);
  }

  editRelation() {
    this.edgeBtnEvent.emit({ type: 'click', action: 'edit' });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hideDelModal === true) {
      // hide the delete modal
      this.hideModal('deleteModal');
      this.hideModal('createNodeModal');
      this.hideModal('createRelationModal');
      this.editData = null;
      this.editRelData = null;

    }
    $('#RelAfterNodeModal').on('hidden.bs.modal', (e) => {
      this.newNodeCreated = null;
      this.newNodeName = null;
      // this.createNodePopup = false;
      this.editNodePopup = false;
      this.editRelationPopup = false;
      this.deleteNodePopup = false;
      this.deleteRelationPopup = false;
      this.setAllToFalse('node');
      this.cleanData.emit('afterCreateNode');
    });
    $('#createNodeModal').on('hidden.bs.modal', (e) => {
      // this event will reset the popupConfig object so that everytime correct data is accessed
      this.setAllToFalse('node');
      this.createNodePopup = false;
      this.createRelationPopup = false;
      this.editNodePopup = false;
      this.editRelationPopup = false;
      this.deleteNodePopup = false;
      this.deleteRelationPopup = false;
      this.editData = null;
      // clear the selected color
      this.newTypeColor = null;
      this.cleanData.emit('node');
    });
    $('#createRelationModal').on('hidden.bs.modal', (e) => {
      // this event will reset the popupConfig object so that everytime correct data is accessed
      this.setAllToFalse('relation');
      this.createNodePopup = false;
      // this.createRelationPopup = false;
      this.editNodePopup = false;
      this.editRelationPopup = false;
      this.deleteNodePopup = false;
      this.deleteRelationPopup = false;
      this.cleanData.emit('relation');
      this.fromNames = [];
      this.toNames = [];
    });

    if ((!!this.editData && !!this.editData.length) || (!!this.editData && !!Object.keys(this.editData).length)) {
      this.disabledBox = true;
      // store the data in internal variable and clear this
      let editNodeData = _.cloneDeep(this.editData);

      this.editData = _.cloneDeep(null);
      // console.log('edit data recieved is ', editNodeData);
      this.editNodeConfig = _.cloneDeep({
        properties: editNodeData['properties'],
        type: editNodeData['type'][0],
        id: editNodeData['id']
      });
      this.clickedNodeID = _.cloneDeep(this.editNodeConfig['id']);
      // console.log('editNodeConfig is ', this.editNodeConfig);
      this.selectedType = null;
      // check if the node is already deleted or not, if yes, simply don't let the user to update it
      // tslint:disable-next-line: max-line-length
      if (
        this.editNodeConfig['properties'].hasOwnProperty('deleted') &&
        (this.editNodeConfig['properties']['deleted'] === 'true' || this.editNodeConfig['properties']['deleted'] === true)
        ) {
        // make changes so that user cannot update the node but rather restore it
        console.log('recieved node is deleted type');
        // let responseBool = true;
        window.setTimeout( () => {
          this.restoreOptions = true;
        }, 0);
      } else {
        window.setTimeout( () => {
          this.restoreOptions = false;
        }, 0);
        console.log('restore options is false for this node');
      }
        this.typeOptions = _.cloneDeep(this.nodeTypes2);
        this.selectedType = this.editNodeConfig['type'];
        // trigger update properties to show data before hand
        this.updateProperties(this.selectedType, this.editNodeConfig);
        const prefilledInfo = this.recreatePrefilledData(editNodeData['properties']);
        if (!!prefilledInfo) {
          // console.log('recieved some prefilled info ', prefilledInfo);
          // set the data into the modal
          this.prefillData('createNodeModal', prefilledInfo, this.editNodeConfig['id']);
        } else {
          // will allow the modal to be visible anyway
          console.error('An error occured while prefilling the data, did not recieve anyhting');
        }
    } else if ((!!this.editRelData && !!this.editRelData.length) || (!!this.editRelData && !!Object.keys(this.editRelData).length)) {
      // execute this portion if edit relationship is triggred
      this.popupConfig.editRelationPopup = true;
      this.editRelationPopup = true;
      console.log('recieved edit relation data is ', this.editRelData);
      this.disabledBox = true;
      let editRelConfig = {
        id: this.editRelData['id'],
        type: this.editRelData['type'],
        properties: this.editRelData['properties'],
        from: this.editRelData['from'],
        to: this.editRelData['to']
      };
      this.clickedRelationID = _.cloneDeep(editRelConfig['id']);

      // tslint:disable-next-line: max-line-length
      if (
        editRelConfig['properties'].hasOwnProperty('deleted') &&
        (editRelConfig['properties']['deleted'] === 'true' || editRelConfig['properties']['deleted'] === true)
        ) {
        // make changes so that user cannot update the node but rather restore it
        console.log('recieved relation is deleted type');
        let responseBool = true;
        this.restoreOptions = _.cloneDeep(responseBool);
      } else {
        let responseBool = false;
        this.restoreOptions = _.cloneDeep(responseBool);
      }
      console.log('fetched relationship types successfully');
        // once types are loaded, set a default type which is the type of selected relation
        // relationTypeOptions are already set
        this.selectedType = editRelConfig['type'];
        this.updateRelProperties(this.selectedType, editRelConfig);
        const prefilledRelInfo = this.recreatePrefilledData(editRelConfig['properties']);

        // disable the from and to boxes
        this.disabledFromBox = true;
        this.disabledToBox = true;
        this.prefillData('createRelationModal', prefilledRelInfo, editRelConfig['id'], 'relation');
        // prefill the connected nodes names for the selected relationship modal
        this.prefillConnectedNodes(editRelConfig);
        this.sharedGraphSrvc.nodeDetails.subscribe(nodeDetailsArray => {
          // this variable will have arrays of nodes in same sequesnce the ids were sent
          console.log('recieved connected node information', nodeDetailsArray);
          this.selectedNodeNameSource = nodeDetailsArray[0]['label'] || '';
          this.selectedNodeNameTarget = nodeDetailsArray[1]['label'] || '';
        });
      // open the edit modal
      this.disabledBox = true;
      this.showModal('createRelationModal');
    }
    // detect if a new node is entered into the graph, prompt user to create a relationship
    if (!!this.newNodeCreated && Object.keys(this.newNodeCreated).length) {
      // new node has been created, prompt the user
      // Do you wish to create a new relationship with respect to {{node_name}} ?
      if (this.newNodeCreated.hasOwnProperty('created') && this.newNodeCreated['created']) {
        if (this.newNodeCreated.hasOwnProperty('node')) {
          this.newNodeName = this.newNodeCreated['node']['label'] || 'Not Available';
          // enable the prompt
          this.setAllToFalse('node');
          this.setAllToFalse('relation');
          this.showModal('RelAfterNodeModal');
        }
      }
    }
    // detect if nodes / relationships have been restored successfully
    console.log('restored recieved options are ', this.restoredDataResponse);
    if (!!this.restoredDataResponse && Object.keys(this.restoredDataResponse).length) {
      console.log('Recieved restored information as ', this.restoredDataResponse);
      if (
        this.restoredDataResponse.hasOwnProperty('nodes') &&
        Array.isArray(this.restoredDataResponse['nodes']) &&
        this.restoredDataResponse['nodes'].length > 0) {
        // hide the node modal
        this.hideModal('createNodeModal');
        this.cleanData.emit('node');
        this.cleanData.emit('relation');
        this.cleanData.emit('restore');
      }
      if (
        this.restoredDataResponse.hasOwnProperty('relations') &&
        Array.isArray(this.restoredDataResponse['relations']) &&
        this.restoredDataResponse['relations'].length > 0) {
        // hide the node modal
        this.hideModal('createRelationModal');
      }
      window.setTimeout(() => {
        this.restoreOptions = false;
      }, 0);
      // clean all the events
      this.cleanData.emit('restore');
      this.cleanData.emit('node');
      this.cleanData.emit('relation');
    }
  }

  prefillConnectedNodes(RelationData) {
    if (RelationData.hasOwnProperty('from') && RelationData.hasOwnProperty('to')) {
      let nodeIDs = _.cloneDeep([RelationData['from'], RelationData['to']]);
      this.fetchNodeNameFromID(nodeIDs);
    }
  }

  fetchNodeNameFromID(nodeIDArray, isRestore = false) {
    // this function will send the node id to the graph visualilzer which has all the information of the nodes
    // the graph visualizer will fetch the node details using the provided node id and send the details back here
    if (!!nodeIDArray.length) {
      console.log('asking for details of ', nodeIDArray);
      this.sharedGraphSrvc.getNodeDetails(nodeIDArray, isRestore);
    } else {
      console.warn('nodeID was not valid while sending event to read node details');
    }
  }

  prefillData(modalID, dataToFill, IDToSupply, type = 'node') {
    if (!modalID) {
      console.warn('cannot prefill data as modal id is not supplied');
    } else {
      // both are supplied, time to prefill the modal
      if ($(`#${modalID}`).length) {
        if (type === 'node') {
          this.popupConfig.editNodePopup = true;
          this.editNodePopup = true;
        } else if (type === 'relation') {
          this.popupConfig.editRelationPopup = true;
          this.editRelationPopup = true;
        }
        this.showModal(modalID);
        // found the modal
        $(`#${modalID}`).on('shown.bs.modal', (event) => {
          this.selectedPropertiesObject = _.cloneDeep(dataToFill);
          // capture the modal text boxes once it is visible
          /* $(`#${modalID} :text`).each(function() {
            let key = $(this).attr('id') || null;
            if (!!dataToFill) {
              if (Object.keys(dataToFill).indexOf(key) > -1) {
                // assign this text box a prefilled value from dataToFill
                $(`[id='${key}']`).val(dataToFill[key]);
                // disable the Name box since it is unique fot the database
                /* if (key === 'id_Name') {
                  $(`[id='${key}']`).attr('disabled', 'disabled');
                }
              }
            }
          }); */

          // add id of the node to the modal
          if (!this.restoreOptions) {
            this.addAttribute('edit_btn', `${type}_id`, IDToSupply);
          } else {
            this.addAttribute('restoreBtn', `${type}_id`, IDToSupply);
          }
        });
      } else {
        console.warn('did not find any element with provided ID');
      }
    }
  }

  addAttribute(elementID, attributeKey, attributeValue) {
    $(`[id='${elementID}']`).attr(attributeKey, attributeValue);

  }

  recreatePrefilledData(prefilledData) {
    // main purpose is to attach id_ to the object keys so that it can be used to find elements in the modal
    if (Object.keys(prefilledData).length > 0) {
      // iterate on the keys and rename them
      // let prefilledObj = {};
      /* Object.keys(prefilledData).forEach(key => {
        // let newKey = `id_${key}`;

        prefilledObj[newKey] = prefilledData[key];
      }); */
      return prefilledData;
    }
    else { return null }
  }

  showModal(modalID) {
    $(`#${modalID}`).modal('show');
  }

  hideModal(modalID) {
    $(`#${modalID}`).modal('hide');
  }

  setAllToFalse(setFor) {
    Object.keys(this.popupConfig).forEach(key => {
      if (this.popupConfig[key]) {
        this.popupConfig[key] = false;
      }
    });
    // reset common properties
    this.selectedType = _.cloneDeep([]);
    this.disabledBox = false;
    this.enableNewTemplate = false;
    if (setFor === 'node') {
      this.createNodePopup = false;
      this.editNodePopup = false;
      this.labelProperties = [];
      this.availablePropertyList = _.cloneDeep({});
      this.deleteNodePopup = false;
      this.selectedPropertiesObject = _.cloneDeep({});
    } else if (setFor === 'relation') {
      this.disabledFromBox = false;
      this.disabledToBox = false;
      this.selectedNodeNameSource = null;
      this.selectedNodeNameTarget = null;
      this.typeProperties = [];
      this.createRelationPopup = false;
      this.editRelationPopup = false;
      this.deleteRelationPopup = false;
    }
  }

  submitModal(type = 'create') {
    let nodeData = {
      id: null,
      properties: {},
      type: null
    };
    nodeData.type = [this.selectedType];
    /* $('#createNodeModal :text').each(function () {
      let key = $(this).attr('id') || null;
      let value = $(this).val() || null;
      nodeData.properties[key] = value;
    }); */
    console.log('properties object on submit is  ', this.selectedPropertiesObject);
    // pass the captured data into the object and move ahead
    nodeData.properties = _.cloneDeep(this.selectedPropertiesObject);
    // Add the selected color to this new type, if selected
    nodeData.properties = this.addNewColorInProperties(nodeData.properties);
    try {
      nodeData = this.validateNodeData(nodeData);
      // hide the modal once the data is created properly
      $('#createNodeModal').modal('hide');
      if (type === 'create') {
        this.insertIntoPropertyList(nodeData.properties);
        this.nodeBtnEvent.emit({ type: 'click', action: 'create', data: nodeData });
        this.popupConfig.createNodePopup = false;
        this.createNodePopup = false;
        this.setAllToFalse('node');
      } else if (type === 'edit') {
        // add the updated properties if any, to the availablePropertyList for future use
        this.insertIntoPropertyList(nodeData.properties);
        this.nodeBtnEvent.emit({ type: 'click', action: 'edit', data: nodeData, process: 'complete' });
        this.popupConfig.editNodePopup = false;
        this.editNodePopup = false;
      }
    } catch (e) {
      console.log(e);
    }
  }

  addNewColorInProperties(properties) {
    if (this.newTypeColor) {
      // user selected a color code
      properties['color'] = this.newTypeColor;
    }
    return properties;
  }


  submitRelModal(type = 'create') {
    let nodeData = null;
    let relationData = null;
    let sourceNode = null;
    let targetNode = null;

    if (type === 'create') {
      nodeData = {
        Name: null
      };
      sourceNode = _.cloneDeep(nodeData);
      targetNode = _.cloneDeep(nodeData);
      sourceNode.Name = this.selectedNodeNameSource;
      targetNode.Name = this.selectedNodeNameTarget;
    }

    relationData = {
      type: null,
      properties: {}
    };

    relationData.type = [this.selectedType];


    // extract properties from modal if entered
    /* $('#createRelationModal :text').each(function() {
      let key = $(this).attr('id') || null;
      let value = $(this).val() || null;
      relationData.properties[key] = value;
      }); */
    console.log('properties object on submit rel is  ', this.selectedPropertiesObject);

    relationData.properties = _.cloneDeep(this.selectedPropertiesObject);
    try {
      relationData = this.validateRelationData(relationData);
      console.log('relationship created is ', relationData);
      // add the source and target nodes of this relation
      if (type === 'create') {
        relationData['from'] = sourceNode.Name;
        relationData['to'] = targetNode.Name;
      }
      relationData['id'] = relationData['id'];
      this.insertIntoPropertyList(relationData.properties);
      this.edgeBtnEvent.emit({ type: 'click', action: `${type}`, data: relationData });
      // hide the modal once the data is created properly
      $('#createRelationModal').modal('hide');
    }
    catch (e) {
      console.log(e);
    }
    // clear from to data
    this.fromNames = [];
    this.fromNames = [];
  }

  insertIntoPropertyList(propertiesToUpdate) {
    // the  purpose of this function is to update the global availablePropertyList
    if (Object.keys(propertiesToUpdate).length > 0) {
      Object.keys(propertiesToUpdate).forEach(property => {
        /* if (Object.keys(this.availablePropertyList).indexOf(property) > -1) {
          debugger;
          let propertyList = this.availablePropertyList[property]['list'];
          if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
            // will enter here if the property Name is already present but the new value not present
            this.availablePropertyList[property]['list'].push(propertiesToUpdate[property]);

          } else {
            let sol = propertiesToUpdate[property];
          }
        } */
        if (Object.keys(this.totalNodesProperties).indexOf(property) > -1) {
          let propertyList = this.totalNodesProperties[property];
          if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
            this.totalNodesProperties[property].push(propertiesToUpdate[property]);
          }
        } else {
          this.totalNodesProperties[property] = [];
          this.totalNodesProperties[property].push(propertiesToUpdate[property]);
        }
        if (Object.keys(this.totalRelationsProperties).indexOf(property) > -1) {
          let propertyList = this.totalRelationsProperties[property];
          if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
            this.totalRelationsProperties[property].push(propertiesToUpdate[property]);
          }
        } else {
          this.totalRelationsProperties[property] = [];
          this.totalRelationsProperties[property].push(propertiesToUpdate[property]);
        }
      });
      // this.availablePropertyList = _.cloneDeep(this.availablePropertyList);
    }
  }

  validateNodeData(nodeObj) {

    if (Object.keys(nodeObj).length > 0) {
      if (nodeObj.hasOwnProperty('type') && nodeObj.type.length > 0) {
        if (nodeObj.hasOwnProperty('properties') && Object.keys(nodeObj.properties).length > 0) {
          return this.cleanNodeData(nodeObj);
        } else {
          throw new Error('Cannot create a node with no Name');
        }
      } else {
        throw new Error('Cannot create a node with no Type');
      }
    } else {
      throw new Error('Cannot create a node with no details');
    }
  }
  validateRelationData(relationObj) {
    if (Object.keys(relationObj).length > 0) {
      if (relationObj.hasOwnProperty('type') && relationObj.type.length > 0) {
        if (relationObj.hasOwnProperty('properties') && Object.keys(relationObj.properties).length > 0) {
          return this.cleanRelationshipData(relationObj);
        } else {
          // user did not specify any properties, its okay
        }
      } else {
        throw new Error('Cannot create a relation with no Type');
      }
    } else {
      throw new Error('cannot create a relation with no details');
    }
  }

  generateID() {
    // this function generates a new id for a the node which will be unique, currently deprecated
    return Math.floor(Date.now() + Math.random());
  }

  processData(data) {
    if (data.length > 0) {
      let tempData = [];
      data.forEach(label => {
        tempData.push({ type: label._fields[1], properties: label._fields[0] });
      });
      return tempData;
    } else return [];
  }

  extractLabels(data) {
    this.nodeTypes2 = [];
    data.forEach(label => {
      this.nodeTypes2.push(label.type[0]);
    });
    // console.log('types are ', this.nodeTypes2);
  }

  updateProperties(event, editProperties = null) {
    // fetch the properties of selected label and display it in the dropdown
    // console.log(event)
    if (event === this.ADD_NEW_LABEL) {
      this.TYPE_TEXT = 'New Type';
      console.log('user wants to add a new label');
    }
    else {
      this.TYPE_TEXT = 'Type';
      if (!editProperties || !editProperties.hasOwnProperty('properties')) {
        editProperties = null;
        this.selectedPropertiesObject = _.cloneDeep({});
      } else {
        editProperties = editProperties['properties'];
      }
      this.labelProperties = this.getProperties([event], editProperties);
    }
  }

  updateRelProperties(event, relProperties = null) {
    // fetch the properties of selected type and display it in the dropdown
    if (!relProperties || !relProperties.hasOwnProperty('properties')) {
      relProperties = null;
      this.selectedPropertiesObject = _.cloneDeep({});
    } else {
      relProperties = relProperties['properties'];
    }
    this.typeProperties = this.getRelProperties([event], relProperties);
  }

  getProperties(labelName, editProperties = null) {
    if (labelName.length > 0) {
      let fetchedProperties = [];
      // if properties are supplied, use them else fetch from the processed data
      if (!!editProperties) {
        Object.keys(editProperties).forEach(property => {
          if (property !== 'Type') {
            fetchedProperties.push(property);
          }
        });
      } else {
        this.processedData.forEach(labelObj => {
          if (labelObj.type[0] === labelName[0]) {
            fetchedProperties = labelObj.properties;
          }
        });
        // if fetched properties is empty, means this is a new Type the user has selected
        // Add 2 properties to this TYPE : Name and deleted with deleted = false by default
        if (!fetchedProperties.length) {
          fetchedProperties.push('Name');
          fetchedProperties.push('deleted');
        }
      }
      // put Name property in the first position
      fetchedProperties.forEach((property, index) => {
        if (property === 'Name' && index !== 0) {
          fetchedProperties = this.swap(fetchedProperties, index, 0);
        }
      });
      // before sending back, set the available property list for each property
      this.setPropertyList(fetchedProperties);

      return fetchedProperties.filter(ele => {
        return (ele !== 'deleted' && ele !== 'color');
      });
    } else {
      return [];
    }
  }

  getRelProperties(relType: Array<string>, relProperties = null): any {
    if (relType.length > 0) {
      let fetchedProperties = [];
      if (!!relProperties) {
        Object.keys(relProperties).forEach(property => {
          if (property !== 'Type') {
            fetchedProperties.push(property);
          }
        });
      }
      else {
        this.relationsData.forEach(Obj => {
          if (Obj.type === relType[0]) {
            fetchedProperties = Obj['properties'];
          }
        });

        if (!fetchedProperties.length) {
          fetchedProperties.push('deleted');
        }
      }

      fetchedProperties.forEach((property, index) => {
        if (property === 'Name' && index !== 0) {
          fetchedProperties = this.swap(fetchedProperties, index, 0);
        }
      });
      // before sending back, set the available property list for each property
      this.setPropertyList(fetchedProperties);

      return fetchedProperties.filter(el => {
        return el !== 'deleted';
      });
    } else {
      return [];
    }
  }

  setPropertyList(propertyKeyList) {
    // this function will keep updating the global allPropertyList whenever new set of properties are recieved
    try {
      propertyKeyList.forEach((propertyName, index) => {
        if (!Object.keys(this.availablePropertyList).length) {
          // this is the first entry
          this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
          this.availablePropertyList[propertyName]['list'] = this.getcollectedProperties(propertyName);
        } else {
          // update the key
          if (Object.keys(this.availablePropertyList).indexOf(propertyName) > -1) {
            this.availablePropertyList[propertyName]['list'] = this.getcollectedProperties(propertyName);
          } else {
            this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
            this.availablePropertyList[propertyName]['list'] = this.getcollectedProperties(propertyName);
          }
        }
        // tslint:disable-next-line: max-line-length
        this.availablePropertyList[propertyName]['list'] = this.pushOnTop(this.ADD_NEW_PROPERTY, this.availablePropertyList[propertyName]['list']);
      });
      // now add a default key of 'Add new Property' in each list
      // once the objectis prepared, create another object to store the info of selected value
      this.initiatePropertiesValues();
    } catch (e) {
      console.warn('Illegal propertyKeyList array supplied in setPropertyList', e);
      this.availablePropertyList = {};
    }
  }

  initiatePropertiesValues() {
    Object.keys(this.availablePropertyList).forEach(key => {
      this.selectedPropertiesObject[key] = '';
    });
    // remove the deleted key if present
    if (Object.keys(this.selectedPropertiesObject).indexOf('deleted') > -1) {
      delete this.selectedPropertiesObject['deleted'];
    }
    console.log('propertyObject looks like ', this.selectedPropertiesObject);
  }

  getcollectedProperties(propertyName) {
    if (!propertyName) {
      return [];
    }
    let combinedPropertyList = [];
    // find the collected property values of given propertyName from totalNodeProperties and totalRelationProperties and fill it
    if (Object.keys(this.totalNodesProperties).indexOf(propertyName) > -1) {
      combinedPropertyList.push(...this.totalNodesProperties[propertyName]);
    }
    if (Object.keys(this.totalRelationsProperties).indexOf(propertyName) > -1) {
      combinedPropertyList.push(...this.totalRelationsProperties[propertyName]);
    }
    // make them unique and order by alphabets
    combinedPropertyList = _.orderBy(combinedPropertyList);
    combinedPropertyList = _.uniq(combinedPropertyList);
    return combinedPropertyList;
  }

  swap(ArrayForSwapping, swapFromIndex, swapToIndex) {
    const temp = ArrayForSwapping[swapFromIndex];
    ArrayForSwapping[swapFromIndex] = ArrayForSwapping[swapToIndex];
    ArrayForSwapping[swapToIndex] = temp;
    return ArrayForSwapping;
  }

  removeDirtyData(dataObj) {
    let newPropertyObject = {};
    Object.keys(dataObj.properties).forEach(property => {
      if (property !== null && property !== undefined) {
        // remove the id_ prefix in the key
        property = property.split('id_')[0];
        newPropertyObject[property] = dataObj.properties[property];
        if (!newPropertyObject[property]) {
          newPropertyObject[property] = 'not available';
        }
      }
    });
    // remove all undefined keys
    if (newPropertyObject.hasOwnProperty('undefined')) {
      delete newPropertyObject['undefined'];
    }
    if (newPropertyObject.hasOwnProperty('Type')) {
      delete newPropertyObject['Type'];
    }
    return newPropertyObject;
  }

  cleanNodeData(nodeObj) {
    let newPropertyObject = {};
    // remove any null properties
    newPropertyObject = this.removeDirtyData(nodeObj);
    // assign it back to the original data
    nodeObj.properties = _.cloneDeep(newPropertyObject);
    console.log('new properties are ', nodeObj);
    // assign a unique id to the node
    nodeObj['id'] = this.generateID();
    if (this.popupConfig.editNodePopup === true) {
      // assign the node id
      this.disabledBox = true;
      let nodeID = !isNaN($(`#edit_btn`).attr('node_id')) ? $(`#edit_btn`).attr('node_id') : null;
      console.log('node id is ', nodeID);
      nodeObj['id'] = nodeID;
    }
    // get the type array removed
    nodeObj['type'] = nodeObj['type'][0];
    return nodeObj;
  }

  cleanRelationshipData(relation) {
    let relationshipProperties = {};
    // remove any null properties
    relationshipProperties = this.removeDirtyData(relation);
    relation.properties = _.cloneDeep(relationshipProperties);
    if (this.popupConfig.editRelationPopup === true) {
      // assign the node id
      this.disabledBox = true;
      const relationID = !isNaN($(`#edit_btn`).attr('relation_id')) ? $(`#edit_btn`).attr('relation_id') : null;
      console.log('relation id is ', relationID);
      relation['id'] = relationID;
    }
    relation['type'] = relation['type'][0];
    return relation;
  }

  /* updateRelProperties(event, relProperties = null) {
 // fetch the properties of selected type and display it in the dropdown
  if (!relProperties || !relProperties.hasOwnProperty('properties')) {
    relProperties = null;
  } else {
    relProperties = relProperties['properties'];
  }
  this.typeProperties =  this.getRelProperties([event], relProperties);
    // trigger an api to get all the names of the nodes in the graph
  this.graphSrvc.getNodeLabelData().subscribe(response => {
    let temname = [];
    if (response && response.length > 0) {
      response.forEach(data => {
        let keyName = Object.keys(data)[0];
        if(keyName === "Name"){
            temname = data['Name'];
          }
        });
      this.fromNames = _.cloneDeep(temname);
      this.toNames = _.cloneDeep(temname);
      }
    }, error => {
      console.log(error);
      this.fromNames = [];
      this.toNames = [];
    });
  } */

  /* getRelProperties(relType: Array<string>, relProperties = null): any {
    if (relType.length > 0) {
      let fetchedProperties = [];
      if (!!relProperties) {
        Object.keys(relProperties).forEach(property => {
          if (property !== 'Type') {
            fetchedProperties.push(property);
          }
        });
      }
      else {
        this.relationsData.forEach(Obj => {
          if (Obj.type === relType[0]) {
            fetchedProperties = Obj['properties'];
            return fetchedProperties;
          }
        });
      }
      return fetchedProperties.filter(el => {
        return el !== 'deleted';
      });
    } else {
      return [];
    }
  } */

  /* submitRelModal(type = 'create') {
    let nodeData = null;
    let relationData = null;
    let sourceNode = null;
    let targetNode = null;

    if (type === 'create') {
      nodeData = {
        Name: null
      };
      sourceNode = _.cloneDeep(nodeData);
      targetNode = _.cloneDeep(nodeData);
      sourceNode.Name = this.selectedNodeNameSource;
      targetNode.Name = this.selectedNodeNameTarget;
    }

    relationData = {
      type: null,
      properties: {}
    };

    relationData.type = [this.selectedType];


    // extract properties from modal if entered
    $('#createRelationModal :text').each(function() {
      let key = $(this).attr('id') || null;
      let value = $(this).val() || null;
      relationData.properties[key] = value;
      });

    try {
      relationData = this.validateRelationData(relationData);
      console.log('relationship created is ', relationData);
      // add the source and target nodes of this relation
      if (type === 'create') {
        relationData['from'] = sourceNode.Name;
        relationData['to'] = targetNode.Name;
      }
      const relationID = !isNaN($(`#edit_btn`).attr('relation_id')) ? $(`#edit_btn`).attr('relation_id') : null;
      relationData['id'] = relationID;
      this.edgeBtnEvent.emit({ type: 'click', action: `${type}`, data: relationData });
      // hide the modal once the data is created properly
      $('#createRelationModal').modal('hide');
    }
    catch (e) {
      console.log(e);
    }
  } */

  updateList(key, name) {
    if (name.length > 0) {
      let ans = '';
      // if name is selected from source, remove it from target and vice versa
      if (key == 'from') {
        ans = _.remove(this.fromNames, (val) => {
          return val === name[0];
        });
        if (ans) {
          this.fromNames = _.cloneDeep(this.fromNames);
        }
      }
      else if (key == 'to') {
        ans = _.remove(this.toNames, (val) => {
          return val === name[0];
        });
        if (ans) {
          this.toNames = _.cloneDeep(this.toNames);
        }
      }
      else {
        // nothing
      }
    }
  }

  activateDelete(deleteModalID, triggeredBy) {
    let id = null;
    // first get the information of the modal which is trying to trigger the delete modal, then show the delete modal
    this.deleteContext = triggeredBy;
    // hide the respective node or relation modal before showing delete modal
    if (triggeredBy === 'node') {
      this.hideModal('createNodeModal');
    }
    if (triggeredBy === 'relation') {
      this.hideModal('createRelationModal');
    }
    $(`#${deleteModalID}`).modal('show');
    // get the id of the node/relation triggering delete
    if (triggeredBy === 'node') {
      id = this.clickedNodeID;
    } else if (triggeredBy === 'relation') {
      id = this.clickedRelationID;
    }
    // add the id of node/relation on the delete button for later reference
    this.addAttribute('del_btn', `${triggeredBy}_id`, id);
  }

  submitDelete(deleteContext) {
    console.log('delete ', deleteContext);
    // get the id of node/relation  to delete
    const selectedID = $(`#del_btn`).attr(`${deleteContext}_id`);
    if (deleteContext === 'node') {
      this.nodeBtnEvent.emit({ type: 'click', action: 'delete', data: { id: selectedID } });
    } else if (deleteContext === 'relation') {
      this.edgeBtnEvent.emit({ type: 'click', action: 'delete', data: { id: selectedID } });
    } else {
      // nothing
    }
    this.hideModal('deleteModal');
  }

  addNewProperty() {
    console.log('add new property');
    this.enableNewTemplate = _.cloneDeep(true);
  }

  deleteProperty(propertyName, modalType = 'node') {
    if (!!propertyName) {
      // find the property in the labelProperties array and if present, simply remove it
      if (modalType === 'node') {
        this.labelProperties.filter((property, index) => {
          if (property === propertyName) {
            console.log('found ', property + ' at ' + index);
            this.updateSelectedPropertiesObject(property, 'delete');
            return this.labelProperties.splice(index, 1);
          }
        });
      } else if (modalType === 'relation') {
        this.typeProperties.filter((property, index) => {
          if (property === propertyName) {
            console.log('found ', property + ' at ' + index);
            this.updateSelectedPropertiesObject(property, 'delete');
            return this.typeProperties.splice(index, 1);
          }
        });
      }
    }
  }

  saveNewProperty(modalType) {
    const modalConfig = {
      node: 0,
      relation: 1
    };
    console.log('adding new property in ', modalType);
    let newPropertyForm = (modalType === 'node') ? $(`#NewPropertyGroup :text`) : $(`#NewPropertyGroupRel :text`);
    let propertyKey = null;
    // let propertyValue = null;
    if (newPropertyForm.length) {
      propertyKey = $(`[id='${$(newPropertyForm[0]).attr('id')}']`).val();
      // propertyValue  = $(`[id='${$(newPropertyForm[1]).attr('id')}']`).val();
      if (!propertyKey) {
        alert('Cannot add a property without a Name');
      } else {
        /* if (!propertyValue) {
          propertyValue = "null";
        } */
        // console.log(propertyKey + '  ' + propertyValue);
        if (modalType === 'node') {
          this.labelProperties.push(propertyKey);
          this.labelProperties = _.uniq(this.labelProperties);
          this.addNewPropertyToAvailablePropterties(propertyKey, this.ADD_NEW_PROPERTY);
          // this.appendNewElement({name: propertyKey});
          this.enableNewTemplate = false;
        } else if (modalType === 'relation') {
          this.typeProperties.push(propertyKey);
          this.typeProperties = _.uniq(this.typeProperties);
          this.enableNewTemplate = _.cloneDeep(false);
          this.addNewPropertyToAvailablePropterties(propertyKey, this.ADD_NEW_PROPERTY);
        }
        this.updateSelectedPropertiesObject(propertyKey, 'add');
      }
    }
    // clear the property box
    $('#propertyKey').val('');
    $('#propertyKeyRel').val('');
  }

  addNewPropertyToAvailablePropterties(propertyName, defaultTextToAdd = '') {
    // add the new property name in the availablePropertiesList if not exisits and add a default value of ADD_NEW_PROPERTY
    if (Object.keys(this.availablePropertyList).indexOf(propertyName) <= -1) {
      // it is a new property
      this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
      if (defaultTextToAdd) {
        this.availablePropertyList[propertyName]['list'] = [defaultTextToAdd];
      }
    }
  }

  removeNewPropertyFromAvailableProperties(propertyName) {
    if (Object.keys(this.availablePropertyList).indexOf(propertyName) > -1) {
      // property found, simlpy delete the property
    }
  }

  updateSelectedPropertiesObject(key, action = 'add') {
    // add / delete the provided key from selectedPropertiesObject
    if (action === 'add') {
      if (Object.keys(this.selectedPropertiesObject).indexOf(key) <= -1) {
        this.selectedPropertiesObject[key] = "";
        this.selectedPropertiesObject = _.cloneDeep(this.selectedPropertiesObject);
      }
    }
    else if (action === 'delete') {
      if (Object.keys(this.selectedPropertiesObject).indexOf(key) > -1) {
        delete this.selectedPropertiesObject[key]
        this.selectedPropertiesObject = _.cloneDeep(this.selectedPropertiesObject);
      }
    }
  }

  // getPropertyValues() {
  //   // get the label information from the graph and then seperate different keys and their already filled options
  //   this.graphSrvc.getNodeLabelData().pipe(map(data => {
  //     if (!data.length) {
  //       return of({});
  //     }
  //     // recieveing some data, filter out the name and labels key and send the rest
  //     console.log('label data is ', data);
  //     return of(data);
  //   }));
  // }

  promptRelation() {
    // call create relation procedure
    this.hideModal('RelAfterNode');
    this.showModal('createRelationModal');
    this.createRelation();
  }

  addNewLabel(labelFor = null) {
    let val = null;
    if (labelFor === 'node') {
      val = $(`#id_newLabelNode`).val();
      if (!!val) {
        // push it in the typeOptions
        let newTypes = _.cloneDeep(this.typeOptions);
        newTypes = _.cloneDeep(this.pushOnTop(val, newTypes, 1));
        newTypes = _.uniq(newTypes);
        this.typeOptions = _.cloneDeep(newTypes);
      }
    } else if (labelFor === 'relation') {
      val = $(`#id_newLabelRelation`).val();
      if (!!val) {
        let newTypesRel = _.cloneDeep(this.relationTypeOptions);
        newTypesRel = _.cloneDeep(this.pushOnTop(val, newTypesRel, 1));
        newTypesRel = _.uniq(newTypesRel);
        this.relationTypeOptions = _.cloneDeep(newTypesRel);
      }
    }
    console.log(val);
    this.selectedType = null;
  }

  updateSelectedOption(propertValueEvent, propertyKey) {
    console.log(`property is  ${propertyKey} and value is ${this.selectedPropertiesObject[propertyKey]}`);
    if (!!propertyKey && this.selectedPropertiesObject[propertyKey] === this.ADD_NEW_PROPERTY) {
      console.log('selected NEW PROPERTY for ', propertyKey);
      this.availablePropertyList[propertyKey]['enableNewProperty'] = true;
    }
  }

  hasList(data) {
    // check whether provided data is present in the availablePropertyList and return accordingly
    if (!!data) {
      if (Object.keys(this.availablePropertyList).indexOf(data) > -1) {
        console.log('will display dropdown for ', data);
        return true;
      } else {
        console.log('will display text box for ', data);
        return false;
      }
    } else {
      return false;
    }
  }

  appendNewElement(elementDetails: object | null) {
    const newPropertyEl = `<div class="modalItem" id="newPropertiesContainer_${elementDetails['name']}">
    <p class="sectionName">${elementDetails['name']}</p>
    <span class="inputSpan">
        <div class="ui corner labeled input normalTextBox">
            <input type="text" placeholder="Enter Value..." id="id_${elementDetails['name']}" 
            [(ngModel)] = "selectedPropertiesObject['${elementDetails['name']}']" 
            (ngModelChange)="updateSelectedOption($event, '${elementDetails['name']}')">
        </div>
    </span>
    <span class="supportIcons" (click)="deleteProperty('${elementDetails['name']}')"><i class="far fa-trash-alt"></i></span>
</div>`;

    // add this element into provided div class
    $(`.newPropertyGroup`).append(newPropertyEl);
  }

  updateNewPropertyValue(keyupEvent, data) {
    if (keyupEvent.key === 'Enter') {
      // push the new value entered into the propertyValues list
      if (!!data) {
        // tslint:disable-next-line: max-line-length
        this.availablePropertyList[data]['list'] = this.pushOnTop(this.selectedPropertiesObject[data], this.availablePropertyList[data]['list'], 1);
        this.availablePropertyList[data]['enableNewProperty'] = false;
      }
    }
  }

  // to set dropdown of from and to 
  optionLookUp = (query: string, initial: number) => {
    // to change lookup option according to search 
    if (!!query && query.length > 0) {
      let regex: RegExp | string;
      try {
        regex = new RegExp(query, "i");
      } catch (e) {
        regex = query;
      }
      return new Promise(resolve =>
        setTimeout(() => resolve(this.totalName.filter(item => item.key.match(regex))), 500));
    } else {
      // to set initial dropdown
      return Promise.resolve(this.totalName);
    }
  }


  restoreData(restoreType) {
    // fetch the id of element requested to restore
    let clickedElementID = this.getAttribute('restoreBtn', `${restoreType}_id`);
    clickedElementID = isNaN(clickedElementID) ? null : parseInt(clickedElementID, 10);
    // now send the data to restore the element
    if ((clickedElementID !== null && clickedElementID !== undefined) && this.allowedRestoreEvents.indexOf(restoreType) > -1) {
      // emit data for node restore
      this.restoreEvent.emit({type: restoreType, data : {id: clickedElementID}});
    } else {
      // tslint:disable-next-line: max-line-length
      console.error('An error occured while restoring the data, either clickedElementID is not valid or the event type is not of node/relation');
    }
  }

  getAttribute(elementID, attributeKey) {
    return $(`#${elementID}`).attr(`${attributeKey}`);
  }

  ngDoCheck() {
    // resetting the value so that it stays updated anytime needed, temporary bug fix for restoredOptions variable not setting properly
    this.restoreOptions = _.cloneDeep(this.restoreOptions);
  }

  selectedColorForNewType(event) {
    console.log('event from parent ', event);
    this.newTypeColor = event;
    if (Object.keys(this.totalNodesProperties).indexOf('color') > -1 && this.totalNodesProperties['color'].indexOf(event) > -1) {
      // the color is already used
      this.snackbar.warn({message: 'This color is already used, select another one !'});
    } else {
      console.log('This is the new color');
    }
  }
}
