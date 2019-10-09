import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import {CostingModalInputInterface} from './../../interfaces/costing-modal-input';

import * as _ from 'lodash';

@Component({
  selector: 'algo-runner-costing-modal',
  templateUrl: './costing-modal.component.html',
  styleUrls: ['./costing-modal.component.scss']
})
export class CostingModalComponent implements OnInit, OnChanges {

  @Input() modalData: CostingModalInputInterface;


  public nodeTypesArray: Array<string> = [];
  public nodePropertiesArray: Array<string> = [];
  public relationTypesArray: Array<string> = [];
  public relationDirectionrray: Array<string>;

  public modalDisplayObject = {};
  public modalDisplayRows = [];

  constructor() {
  }

  /**
   * Sets modal data
   * @description The function will update the modal info if sent by the parent
   */
  setModalData(): void {
    if (this.modalData.hasOwnProperty('nodes') && this.modalData.nodes.hasOwnProperty('types')) {
      this.modalDisplayObject['Node Type'] = _.cloneDeep(this.modalData.nodes['types']);
    }
    if (this.modalData.hasOwnProperty('nodes') && this.modalData.nodes.hasOwnProperty('properties')) {
      // this.nodePropertiesArray = _.cloneDeep(this.modalData.nodes['properties']);
      this.modalDisplayObject['Node Properties'] = this.extractProperties(this.modalData.nodes['properties']);
    }
    if (this.modalData.hasOwnProperty('relations') && this.modalData.nodes.hasOwnProperty('types')) {
      this.modalDisplayObject['Relation Type'] = _.cloneDeep(this.modalData.nodes['types']);
    }
    this.modalDisplayObject['Relation Direction'] = ['In', 'Out', 'Both' ];

    Object.keys(this.modalDisplayObject).forEach(key => this.modalDisplayRows.push(key));
    this.modalDisplayRows = _.uniq(this.modalDisplayRows);
  }

  ngOnInit() {
  }

  extractProperties(arrayOfObjects) {
    if (arrayOfObjects && arrayOfObjects.constructor === Object) {
      return Object.keys(arrayOfObjects);
    } else {
      return [];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.modalData.currentValue !== changes.modalData.previousValue) {
      // to be called only when the the modalData variable has been updated
      this.setModalData();
    }
  }

  selectedDropDown(event) {
    console.log('selected dropdown details', event);
  }
}
