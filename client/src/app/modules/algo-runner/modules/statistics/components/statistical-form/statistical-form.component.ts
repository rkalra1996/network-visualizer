// tslint:disable: no-string-literal
import { Component, OnInit, Input, OnChanges } from '@angular/core';

// interfaces
import {InputFormRenderInterface} from './../../interfaces/input-form-render/input-form-render';
import { StatisticalFormUtilityService } from '../../services/statistical-form-utility/statistical-form-utility.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'algo-runner-statistical-form',
  templateUrl: './statistical-form.component.html',
  styleUrls: ['./statistical-form.component.scss']
})
export class StatisticalFormComponent implements OnInit, OnChanges {

  @Input() selectedAlgorithm;
  @Input() dropdownData;

  GENERIC_FORM = 'generic-form';
  PRIORITY_FORM = 'priority-form';

  private algoName = '';
  genericFormValid = false;


  collectedAnalysisFormData: {genericData: object, priorityData: object};

  // observable to send data to the form component
  public formDetails$ = new BehaviorSubject<object|null>(null);

  formDetails: InputFormRenderInterface;
  renderDetails: InputFormRenderInterface;
  showInputTemplate: string | boolean = 'loading';
  constructor(private statiscticalUtilitySrvc: StatisticalFormUtilityService) { }

  ngOnInit() {
  }

  initiateForm(formDataToUse: InputFormRenderInterface) {
    // set whether priority card is needed to display or not
    this.renderDetails = this.statiscticalUtilitySrvc.prepareRenderInformation(formDataToUse);

    // send the formDetails of current algo and dropdown data to the form component
    const formObject = {
      selectedAlgoFormDetails : formDataToUse,
      dropdownData: this.dropdownData
    }
    this.formDetails$.next(formObject);
  }

  ngOnChanges() {
    if (!!this.selectedAlgorithm && this.selectedAlgorithm.constructor === Object) {
      this.collectedAnalysisFormData = {genericData: {}, priorityData : {}};
      // recieved a new form object
      this.formDetails = this.selectedAlgorithm['algo_form'];
      this.algoName = this.selectedAlgorithm['title'];

      if (this.formDetails.constructor === Object && Object.keys(this.formDetails).length > 0) {
        this.initiateForm(this.formDetails);
        this.showInputTemplate = true;
      } else {
        this.showInputTemplate = false;
      }
  }
}

storeSelectedFormData(event) {
  console.log('event from generic form data ', event);
  this.collectData(event, this.GENERIC_FORM);
}

storeUpdatedPriority(event) {
  console.log('event from priority card', event);
  this.collectData(event, this.PRIORITY_FORM);
}

compileAndAnalze() {
  this.statiscticalUtilitySrvc.initiateFormRetrieveProcess();
}

collectData(eventObject, collectFrom) {
  if (collectFrom === this.GENERIC_FORM) {
    this.collectedAnalysisFormData.genericData = eventObject;
  } else if (collectFrom === this.PRIORITY_FORM) {
    this.collectedAnalysisFormData.priorityData = eventObject;
  }
  this.collectedAnalysisFormData['title'] = this.algoName;
  console.log('collected data from both forms is ', this.collectedAnalysisFormData);

}

checkForm(genericFormElement) {
  console.log('recieved in the grand parent ', genericFormElement, genericFormElement.valid);
  this.genericFormValid = genericFormElement.valid;
}
}
