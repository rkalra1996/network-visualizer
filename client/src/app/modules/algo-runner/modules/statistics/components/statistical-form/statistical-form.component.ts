import { Component, OnInit, Input, OnChanges } from '@angular/core';

// interfaces
import {InputFormRenderInterface} from './../../interfaces/input-form-render/input-form-render';

@Component({
  selector: 'algo-runner-statistical-form',
  templateUrl: './statistical-form.component.html',
  styleUrls: ['./statistical-form.component.scss']
})
export class StatisticalFormComponent implements OnInit, OnChanges {

  @Input() selectedAlgorithm: object = null;
  formDetails: InputFormRenderInterface;
  renderDetails: InputFormRenderInterface;
  constructor() { }

  ngOnInit() {
  }

  initiateForm(formDataToUse: InputFormRenderInterface): object {
    this.renderDetails = formDataToUse;
    return{};
  }

  ngOnChanges() {
    if (!!this.selectedAlgorithm && this.selectedAlgorithm.constructor === Object) {
      // recieved a new form object
      this.formDetails = this.selectedAlgorithm['algo_form'];
      this.initiateForm(this.formDetails);
  }

}
}
