import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class StatisticsFormCreatorService {

  constructor() { }

  prepareDataForForm(data, ArrayData): Array<object> {
    // extract the fields
    const formData = [];
    data.fields.forEach((field) => {
      return formData.push({label: field.key, type: field.type, value: this.fetchValueArray(ArrayData, field.key)});
    });

    return formData;
  }

  fetchValueArray(ArrayDataObject, keyName) {
    let fetchedValueArray = [];

    Object.keys(ArrayDataObject).forEach(key => {
      if (key === keyName) {
        fetchedValueArray = ArrayDataObject[key];
      }
    });
    return fetchedValueArray;
  }

  createFormControls(formData) {
    const formControls = {};
    formData.forEach(element => {
      if (element.type === 'dropdown') {
        formControls[element.label] = new FormControl('', Validators.required);
      }
    });
    return new FormGroup(formControls);
  }
}
