// tslint:disable: max-line-length
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {FormGroup} from '@angular/forms';
import { StatisticsFormCreatorService } from '../../services/statistics-form-creator/statistics-form-creator.service';
import { StatisticalFormUtilityService } from '../../services/statistical-form-utility/statistical-form-utility.service';

@Component({
  selector: 'statistics-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  @Output() selectedFormDataEvent = new EventEmitter<any>();
  @Input() formDataSubject: BehaviorSubject<object|null>;

  @Output() sendFormToParent = new EventEmitter<object| null>();

  formData: any;
  dynamicFormControl: any;

  public form: FormGroup;

  constructor(private formSrvc: StatisticsFormCreatorService, private statFormUtilitySrvc: StatisticalFormUtilityService) {
   }

  ngOnInit() {

    // read the form details provided
    this.formDataSubject.subscribe(response => this.processForm(response));

    this.statFormUtilitySrvc.collectGenericFormData.subscribe(res => {
      if (res !== null) {
        // collect the form data whatever it is
        this.collectFormData();
      }
    });
  }

  collectFormData() {
    const collectedForm = this.form.value;
    this.selectedFormDataEvent.emit(collectedForm);
  }

  /**
   * Process form
   * @param formData the parameter should contain data for the form
   * @description The purpose of the function is to create proper form data to render in the formsModule
   */
  processForm(formData) {
    console.log('response from process form is ', formData);
    if (this.validateFormData(formData)) {
      this.prepareFormElements(formData);
    }
  }

  /**
   * Validates form data
   * @param dataToValidate
   * @description The function will valiate the form data on the following parameters
   * 1. The object contains selectedAlgoFormDetails key of object type
   * 2. it must have a key named fields of Array datatype
   *
   * @returns true if form data is validated, false otherwise
   */
  validateFormData(dataToValidate): boolean {
    let isValidated = false;
    if (!!dataToValidate && dataToValidate.constructor === Object) {
      if (dataToValidate.hasOwnProperty('selectedAlgoFormDetails') && dataToValidate.selectedAlgoFormDetails && dataToValidate.selectedAlgoFormDetails.constructor === Object) {
        if (Object.keys(dataToValidate.selectedAlgoFormDetails).length) {
          if (dataToValidate.selectedAlgoFormDetails.hasOwnProperty('fields') && dataToValidate.selectedAlgoFormDetails.fields && Array.isArray(dataToValidate.selectedAlgoFormDetails.fields) && dataToValidate.selectedAlgoFormDetails.fields.length > 0) {
            isValidated = true;
          }
        }
      }
    }
    return isValidated;
  }

  /**
   * Prepares form elements
   * @param dataObject
   * @description The function will prepare form elements
   */
  prepareFormElements(dataObject) {
    const algoFormDetails = dataObject.selectedAlgoFormDetails;
    const dropdownArrayData = dataObject.dropdownData;
    this.formData = this.formSrvc.prepareDataForForm(algoFormDetails, dropdownArrayData);
    this.form = this.formSrvc.createFormControls(this.formData);
    console.log('form controls are ', this.dynamicFormControl);
    console.log('new form data is ', this.formData);

    // track for form changes
    this.form.valueChanges.subscribe(changedValue => {
      console.log('detected form change', changedValue);
      this.sendFormToParent.emit(this.form);
    });
  }

}
