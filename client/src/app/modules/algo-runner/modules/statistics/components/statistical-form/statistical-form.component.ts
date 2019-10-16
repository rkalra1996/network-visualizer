// tslint:disable: no-string-literal
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {SuiSelectModule} from 'ng2-semantic-ui';

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
    // experimental
    if (this.dropdownData && this.dropdownData.constructor === Object) {
      this.dropdownData = Object.keys(this.dropdownData);
    }

    // send the formDetails of current algo and dropdown data to the form component
    const formObject = {
      selectedAlgoFormDetails : formDataToUse,
      dropdownData: this.dropdownData
    }
    this.formDetails$.next(formObject);
  }

  ngOnChanges() {
    if (!!this.selectedAlgorithm && this.selectedAlgorithm.constructor === Object) {
      // recieved a new form object
      this.formDetails = this.selectedAlgorithm['algo_form'];

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
}

storeUpdatedPriority(event) {
  console.log('event from priority card', event);
}

compileAndAnalze() {
  console.log('compiling and anlyzing result');
}
}
