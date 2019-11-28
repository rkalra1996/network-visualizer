// tslint:disable: no-string-literal

import { Injectable } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import { IAppState } from 'src/app/modules/redux/store';

import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticalFormUtilityService {

  NODE_CATEGORY = 'nodes';
  RELATION_CATEGORY = 'edges';
  DIRECTION_CATEGORY = 'direction';
  DEFAULT_DIRECTION_VALUES = ['In', 'Out', 'Both'];

  // Form variables to work with generic and priority forms
  collectGenericFormData = new BehaviorSubject<object|null>(null);
  collectPriorityFormData = new BehaviorSubject<object|null>(null);

  constructor(private redux: NgRedux<IAppState>) { }

  prepareRenderInformation(formDataToUse): object {
    const renderInfoObject = {};
    if (!!formDataToUse && formDataToUse.constructor === Object && Object.keys(formDataToUse).length > 0) {
      renderInfoObject['showPriorityCard'] = (formDataToUse.hasOwnProperty('priority_card') && formDataToUse.priority_card) ? true : false;
    } else {
      // if either the data provided is null / empty / invalid type, set defaults
      renderInfoObject['showPriorityCard'] = false;
      renderInfoObject['priorityDependency'] = false;
    }
    return renderInfoObject;
  }

  /**
   * Process data
   * @param dataToProcess The algorithm data from which useful information is to accessed
   */
  processData(dataToProcess) {
    const ALLOWED_TYPES = {
      dropdown: [],
      default: []
    };

    let processedData = {};
    if (dataToProcess && Array.isArray(dataToProcess) && dataToProcess.length > 0) {
      dataToProcess.forEach(algo => {
        if (algo.hasOwnProperty('algo_form') && algo.algo_form.constructor === Object && Object.keys(algo.algo_form).length > 0) {
          if (algo.algo_form.hasOwnProperty('fields') && Array.isArray(algo.algo_form.fields) && algo.algo_form.fields.length > 0) {
            processedData = this.extractkeys(processedData, algo.algo_form.fields, ALLOWED_TYPES);
          }
          // also check for alternate property fields to include
          // tslint:disable-next-line: max-line-length
          if (algo.algo_form.hasOwnProperty('alternate_priority_values') && algo.algo_form.alternate_priority_values.constructor === Object && Object.keys(algo.algo_form.alternate_priority_values).length > 0) {
            // tslint:disable-next-line: max-line-length
            if (algo.algo_form.alternate_priority_values.hasOwnProperty('fields') && Array.isArray(algo.algo_form.alternate_priority_values.fields) && algo.algo_form.alternate_priority_values.fields.length > 0) {
              processedData = this.extractkeys(processedData, algo.algo_form.alternate_priority_values.fields, ALLOWED_TYPES);
            }
          }
        }
      });
      console.log(' pre final processed data is ', processedData);
      // now assign values from the previous data to respective keys in proccessedData
      processedData = this.assignData(processedData);
      console.log('final processed data is ', processedData);
      return processedData;
    } else {
      // data is invalid
      return {};
    }
  }

  extractkeys(variableToUse, dataToUse, allowedTypes) {
    dataToUse.forEach(field => {
      if (field.hasOwnProperty('key') && field.key.length > 0) {
        if (field.hasOwnProperty('type') && field.type.length > 0) {
          // tslint:disable-next-line: max-line-length
          variableToUse[field.key] = {
          type: Object.keys(allowedTypes).indexOf(field.type) > -1 ? allowedTypes[field.type] : allowedTypes['default'],
            code: field.hasOwnProperty('code') ? field.code : null,
            search: field.hasOwnProperty('search') ? field.search : null
          };
        }
      }
    });
    return variableToUse;
  }

  assignData(objectToUse) {
    console.log();
    const objectToProcess = _.cloneDeep(objectToUse);
    // the function will fetch the data from redux store and assign appropriate values
    const reduxState = this.redux.getState().appliedFilters;
    console.log('state accessed inside the form utility is ', reduxState);
    // tslint:disable-next-line: max-line-length
    if (!!reduxState && reduxState.hasOwnProperty('filteredData') && reduxState.filteredData.constructor === Object) {
      // steps to assign values
      const objectEntries = Object.entries(objectToUse);
      let entryName;
      let extractedKeys;

      objectEntries.forEach(entry => {
        entryName = entry[0];
        const labelValue = entry[1];
        const labelCateogy = labelValue['code'];

        // check if the label is for nodes or edges
        if (labelCateogy.toLowerCase() === this.NODE_CATEGORY) {
          extractedKeys = this.collect(this.NODE_CATEGORY, labelValue['search'], reduxState.filteredData);

        } else if (labelCateogy.toLowerCase() === this.RELATION_CATEGORY) {
          extractedKeys = this.collect(this.RELATION_CATEGORY, labelValue['search'], reduxState.filteredData);
        } else if (labelCateogy.toLowerCase() === this.DIRECTION_CATEGORY) {
          // populate dropdown keys manually
          extractedKeys = this.DEFAULT_DIRECTION_VALUES;
        }

        // assign the respective extracted key to its associated label
        objectToProcess[entryName] = extractedKeys;
      });
    } else {
      // no data available
      return objectToProcess;
    }
    return objectToProcess;
  }


  collect(objectName, keyToUse, prefilteredData) {
    // get the selected object based on objectName
    const selectedObject = prefilteredData['completeGraph'][objectName];
    if (selectedObject) {
      let collectedList = [];
      selectedObject.forEach(entry => {
        if (entry.hasOwnProperty(keyToUse)) {
          // if the selected key is an object, then push the array of keys
          if (entry[keyToUse].constructor === Object) {
            Object.keys(entry[keyToUse]).forEach(key => collectedList.push(key));
          } else if (typeof entry[keyToUse] === 'string' || typeof entry[keyToUse] === 'number') {
            // if the selected property is a string/nuber, simply push it
            collectedList.push(entry[keyToUse]);
          }
        } else if (entry) {
          // if the key does not exist on the root, it must exist inside properties
          if (entry.hasOwnProperty('properties')) {
            if (entry.properties.hasOwnProperty(keyToUse)) {
              // if the selected key is an object, then push the array of keys
              if (entry.properties[keyToUse].constructor === Object) {
              Object.keys(entry.properties[keyToUse]).forEach(key => collectedList.push(key));
              } else if (typeof entry.properties[keyToUse] === 'string' || typeof entry.properties[keyToUse] === 'number') {
                  // if the selected property is a string/nuber, simply push it
                  collectedList.push(entry.properties[keyToUse]);
              }
            }
          }
        }
      });
      console.log('collected list is ', collectedList);
      // make sure the list is unique
      collectedList = _.uniq(collectedList);
      return collectedList;
    } else {
      return [];
    }
  }

  initiateFormRetrieveProcess() {
    // call a function inside generic form and priority form to send back collective form data to the Run Button
    this.collectGenericFormData.next({event: 'collect'});
    this.collectPriorityFormData.next({event: 'collect'});
  }

}
