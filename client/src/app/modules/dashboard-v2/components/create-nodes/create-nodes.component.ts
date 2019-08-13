import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import {SearchService} from './../../../shared/services/search-service/search.service';
import * as _ from 'lodash';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import { map, filter } from 'rxjs/operators';

import {SharedGraphService} from './../../../core/services/shared-graph.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-create-nodes',
  templateUrl: './create-nodes.component.html',
  styleUrls: ['./create-nodes.component.scss']
})

export class CreateNodesComponent implements OnInit, OnChanges {

  @Output() nodeBtnEvent = new EventEmitter<any>();
  public disabledBox = false;
  public deleteContext = 'Node';
  public enableNewTemplate = false;
  public clickedNodeID = null;
  public clickedRelationID = null;
  public disabledFromBox = false;
  public disabledToBox = false;
  public relationSourceNode = null;
  public relationTargetNode = null;
  @Output() edgeBtnEvent = new EventEmitter<any>();

  @Input() nodeTypes: Array<any> = [];
  public nodeTypes2: Array<any> = [];
  public selectedType: any = [];
  public typeOptions: Array<any> = [];
  public toolTipText = '';
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
  public queryObj = {
    raw: true,
    query: `MATCH (p) WITH DISTINCT keys(p) AS keys,p
     with DISTINCT labels(p) as label,keys 
     UNWIND keys AS keyslisting WITH DISTINCT keyslisting AS allfields,label
     RETURN collect(allfields),label`
  };
  public popupConfig = {
    createNodePopup : false,
    editNodePopup : false,
    deleteNodePopup : false,
    createRelationPopup : false,
    editRelationPopup : false,
    deleteRelationPopup : false
  };
  @Input() editData: any;
  @Input() editRelData: any;
  @Input() hideDelModal: any;

  constructor(
    private SharedSrvc: SearchService, 
    private graphSrvc: GraphDataService,
    private sharedGraphSrvc: SharedGraphService, 
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.toolTipText = 'The Properties section can be left blank to set a default Node';
    $('.toolTipText').tooltip();
  }

  createNode() {
    this.popupConfig.createNodePopup = true;
    this.disabledBox = false;
    this.enableNewTemplate = false;
    /* this.SharedSrvc.runQuery(this.queryObj).subscribe(data => {
      console.log('recieved label data from service ', data);
      this.processedData = this.processData(data);
      // extract types from the array
      this.extractLabels(this.processedData);
      this.typeOptions = _.cloneDeep(this.nodeTypes2);
    }, err => {
      console.log('An error occured while reading label data from the database');
    }); */
    this.getNodeTypes().subscribe(data => {
      this.typeOptions = _.cloneDeep(data);
    }, err => {
      console.log('An error occured while reading label data from the database', err);
      this.typeOptions = _.cloneDeep([]);
    });
  }
  editNode() {
    this.disabledBox = true;
    // this will send the edit event and then the app will wait for the node click event sent back to this component
    this.nodeBtnEvent.emit({ type: 'click', action: 'edit' });
  }
  deleteNode() {
    // gather the information to delete node and send to the graph

    this.nodeBtnEvent.emit({ type: 'click', action: 'delete' });
  }
  createRelation() {
    this.popupConfig.createRelationPopup = true;
    this.enableNewTemplate = false;
    this.disabledBox = false;
    this.getRelationTypes().subscribe(data => {});
  }

  editRelation() {
    this.edgeBtnEvent.emit({ type: 'click', action: 'edit' });
  }
  deleteRelation() {
    this.edgeBtnEvent.emit({ type: 'click', action: 'delete' });
  }

  getNodeTypes() {
    return this.SharedSrvc.runQuery(this.queryObj).pipe(map(data => {
      console.log('recieved label data from service ', data);
      this.processedData = this.processData(data);
      // extract types from the array
      this.extractLabels(this.processedData);
      // this.typeOptions = _.cloneDeep(this.nodeTypes2);
      return this.nodeTypes2;
    }));
  }

  getRelationTypes() {
    return this.graphSrvc.getGraphRelations().pipe(map(response => {

      this.relationsData = this.filterRelationsData(response);
      const extractedTypes = this.extractTypes(this.relationsData);
      // pass it into the options for dropdown
      this.relationTypeOptions = _.cloneDeep(extractedTypes);
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
            console.log('found type');
            matched = true;
            firstObj['properties'].push(...response[i].properties);
          }
        });
        if (matched) {
          response.splice(i,1);
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
    return filteredObjectArray;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('hideDelModal is ', this.hideDelModal);
    if (this.hideDelModal === true) {
      // hide the delete modal
      console.log('hide event recieved');
      this.hideModal('deleteModal');
      this.hideModal('createNodeModal');
      this.hideModal('createRelationModal');
      this.editData = null;
      this.editRelData = null;
      console.log('post hide event is ', this.hideDelModal);

    }
    $('#createNodeModal').on('hidden.bs.modal', (e) => {
      // this event will reset the popupConfig object so that everytime correct data is accessed
      this.setAllToFalse('node');
    });
    $('#createRelationModal').on('hidden.bs.modal', (e) => {
      // this event will reset the popupConfig object so that everytime correct data is accessed
      this.setAllToFalse('relation');
    });

    if ((!!this.editData && !!this.editData.length) || (!!this.editData && !!Object.keys(this.editData).length)) {
      this.disabledBox = true;
      // console.log('edit data recieved is ', this.editData);
      this.editNodeConfig = _.cloneDeep({
        properties : this.editData['properties'],
        type : this.editData['type'][0],
        id: this.editData['id']
      });
      this.clickedNodeID = _.cloneDeep(this.editNodeConfig['id']);
      // console.log('editNodeConfig is ', this.editNodeConfig);
      this.selectedType = null;
      this.getNodeTypes().subscribe(data => {
        this.typeOptions = _.cloneDeep(data);
        this.selectedType = this.editNodeConfig['type'];
        // trigger update properties to show data before hand
        this.updateProperties(this.selectedType, this.editNodeConfig);
        const prefilledInfo = this.recreatePrefilledData(this.editData['properties']);
        if (!!prefilledInfo) {
          // console.log('recieved some prefilled info ', prefilledInfo);
          // set the data into the modal
          this.prefillData('createNodeModal', prefilledInfo, this.editNodeConfig['id']);
        } else {
          // will allow the modal to be visible anyway
          console.error('An error occured while prefilling the data, did not recieve anyhting');
        }
      }, err => {
        console.log('An error occured while reading label data from the database');
        this.typeOptions = [];
      });
    } else if ((!!this.editRelData && !!this.editRelData.length) || (!!this.editRelData && !!Object.keys(this.editRelData).length)) {
      // execute this portion if edit relationship is triggred
      this.popupConfig.editRelationPopup = true;
      console.log('recieved edit relation data is ', this.editRelData);
      this.disabledBox = true;
      let editRelConfig = {
        id : this.editRelData['id'],
        type : this.editRelData['type'],
        properties : this.editRelData['properties'],
        from : this.editRelData['from'],
        to : this.editRelData['to']
      };
      this.clickedRelationID = _.cloneDeep(editRelConfig['id']);
      this.getRelationTypes().subscribe(response => {
      console.log('fetched relationship types successfully');
      // once types are loaded, set a default type which is the type of selected relation
      // relationTypeOptions are already set
      this.selectedType = editRelConfig['type'];
      this.updateRelProperties(this.selectedType, editRelConfig);
      const prefilledRelInfo = this.recreatePrefilledData(editRelConfig['properties']);

      // disable the from and to boxes
      this.disabledFromBox = true;
      this.disabledToBox = true;

      if (!!prefilledRelInfo) {
        // console.log('recieved some prefilled info ', prefilledRelInfo);
        // set the data into the modal
        this.prefillData('createRelationModal', prefilledRelInfo, editRelConfig['id'], 'relation');
      } else {
        // will allow the modal to be visible anyway
        console.error('An error occured while prefilling the relation data, did not recieve anyhting');
      }

      // prefill the connected nodes names for the selected relationship modal
      this.prefillConnectedNodes(editRelConfig);
      this.sharedGraphSrvc.nodeDetails.subscribe(nodeDetailsArray => {
        // this variable will have arrays of nodes in same sequesnce the ids were sent
        console.log('recieved connected node information', nodeDetailsArray);
        this.selectedNodeNameSource = nodeDetailsArray[0]['label'] || '';
        this.selectedNodeNameTarget = nodeDetailsArray[1]['label'] || '';
      });

    }, err => {
      console.warn('An error occured while setting the types in the dropdown');
    });
      // open the edit modal
      this.disabledBox = true;
      this.showModal('createRelationModal');
    }
  }

  prefillConnectedNodes(RelationData) {
    if (RelationData.hasOwnProperty('from') && RelationData.hasOwnProperty('to')) {
      let nodeIDs = _.cloneDeep([RelationData['from'], RelationData['to']]);
      this.fetchNodeNameFromID(nodeIDs);
    }
  }

  fetchNodeNameFromID(nodeIDArray) {
    // this function will send the node id to the graph visualilzer which has all the information of the nodes
    // the graph visualizer will fetch the node details using the provided node id and send the details back here
    if (!!nodeIDArray.length) {
      console.log('asking for details of ', nodeIDArray);
      this.sharedGraphSrvc.getNodeDetails(nodeIDArray);
    } else {
      console.warn('nodeID was not valid while sending event to read node details');
    }
  }

  prefillData(modalID, dataToFill, IDToSupply, type = 'node') {
    if (!modalID) {
      console.warn('cannot prefill data as modal id is not supplied');
    } else if (!Object.keys(dataToFill).length) {
      console.warn('Did not recieve any data to prefill');
    } else {
      // both are supplied, time to prefill the modal
      if ($(`#${modalID}`).length) {
        this.popupConfig.editNodePopup = true;
        this.showModal(modalID);
        // found the modal
        $(`#${modalID}`).on('shown.bs.modal', (event) => {
          // capture the modal text boxes once it is visible
          $(`#${modalID} :text`).each(function() {
            let key = $(this).attr('id') || null;
            if (Object.keys(dataToFill).indexOf(key) > -1) {
              // assign this text box a prefilled value from dataToFill
              $(`[id='${key}']`).val(dataToFill[key]);
              // disable the Name box since it is unique fot the database
              /* if (key === 'id_Name') {
                $(`[id='${key}']`).attr('disabled', 'disabled');
              } */
            }
          });
          // add id of the node to the modal
          this.addAttribute('edit_btn', `${type}_id`, IDToSupply);
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
      let prefilledObj = {};
      Object.keys(prefilledData).forEach(key => {
        let newKey = `id_${key}`;
        prefilledObj[newKey] = prefilledData[key];
      });
      return prefilledObj;
    }
    else {return null}
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
      this.labelProperties = [];
    } else if (setFor === 'relation') {
      this.disabledFromBox = false;
      this.disabledToBox = false;
      this.typeProperties = [];
    }
  }

  submitModal(type = 'create') {
    console.log(type);
    let nodeData = {
      id: null,
      properties: {},
      type: null
    };
    nodeData.type = [this.selectedType];
    $('#createNodeModal :text').each(function () {
      let key = $(this).attr('id') || null;
      let value = $(this).val() || null;
      nodeData.properties[key] = value;
    });
    try {
      nodeData = this.validateNodeData(nodeData);
      // hide the modal once the data is created properly
      $('#createNodeModal').modal('hide');
      if (type === 'create') {
        console.log('node created is ', nodeData);
        this.nodeBtnEvent.emit({ type: 'click', action: 'create', data: nodeData });
        this.popupConfig.createNodePopup = false;
      } else if (type === 'edit') {
        this.nodeBtnEvent.emit({ type: 'click', action: 'edit', data: nodeData, process : 'complete' });
        this.popupConfig.editNodePopup = false;
      }
    }
    catch (e) {
      console.log(e);
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
        }
        else {
          // user did not specify any properties, its okay
        }

      }
      else {
        throw new Error('Cannot create a relation with no Type');
      }
    }
    else {
      throw new Error ('cannot create a relation with no details');
    }
  }

  generateID() {
    // this function generates a new id for a the node which will be unique
    return Math.floor(Date.now() + Math.random());
  }

  processData(data) {
    if (data.length > 0) {
      let tempData = [];
      data.forEach(label => {
        tempData.push({type: label._fields[1], properties : label._fields[0]});
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
    if (!editProperties || !editProperties.hasOwnProperty('properties')) {
      editProperties = null;
    } else {
      editProperties = editProperties['properties'];
    }
    this.labelProperties =  this.getProperties([event], editProperties);
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
      }
      else {
        this.processedData.forEach(labelObj => {
          if (labelObj.type[0] === labelName[0]) {
            fetchedProperties = labelObj.properties;
          }
        });
      }
      // put Name property in the first position
      fetchedProperties.forEach((property, index) => {
        if (property === 'Name' && index !== 0) {
          fetchedProperties = this.swap(fetchedProperties, index, 0);
        }
      });
      return fetchedProperties.filter(ele => {
        return ele !== 'deleted';
    });
    }
    else {
      return [];
    }
  }

  swap(ArrayForSwapping,swapFromIndex, swapToIndex) {
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
        property = property.split('id_')[1];
        newPropertyObject[property] = dataObj.properties['id_' + property];
        if (!newPropertyObject[property]) {
          newPropertyObject[property] = 'not available';
        }
      }
    });
    // remove all undefined keys
    if (newPropertyObject.hasOwnProperty('undefined')) {
      delete newPropertyObject['undefined'];
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
    relation['type'] = relation['type'][0];
    return relation;
  }

  extractTypes(ObjectArray: any): any {
    let typesArray = [];
    ObjectArray.forEach(obj => {
      typesArray.push(obj['type']);
    });
    return typesArray;
  }

  updateRelProperties(event, relProperties = null) {
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
    $('#createRelationModal :text').each(function() {
      let key = $(this).attr('id') || null;
      let value = $(this).val() || null;
      relationData.properties[key] = value;
      });
      console.log(relationData);

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
  }

  updateList(key,name) {
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
      this.nodeBtnEvent.emit({ type: 'click', action: 'delete', data : {id: selectedID} });
    } else if  (deleteContext === 'relation') {
      this.edgeBtnEvent.emit({ type: 'click', action: 'delete', data : {id: selectedID} });
    } else {
      // nothing
    }
  }

  addNewProperty() {
    console.log('add new property');
    this.enableNewTemplate = true;
  }

  deleteProperty(propertyName, modalType = 'node') {
    if (!!propertyName) {
      // find the property in the labelProperties array and if present, simply remove it
      if (modalType === 'node') {
        this.labelProperties.filter((property,index) => {
          if (property === propertyName) {
            console.log('found ', property + ' at ' + index);
            return this.labelProperties.splice(index, 1 );
          }
      });
    } else if (modalType === 'relation') {
        this.typeProperties.filter((property, index) => {
          if (property === propertyName) {
            console.log('found ', property + ' at ' + index);
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
      propertyKey  = $(`[id='${$(newPropertyForm[0]).attr('id')}']`).val();
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
        }
        else if (modalType === 'relation') {
          this.typeProperties.push(propertyKey);
          this.typeProperties = _.uniq(this.typeProperties);
        }
      }
    }
  // clear the property box
    $('#propertyKey').val('');
    $('#propertyKeyRel').val('');
  }
}
