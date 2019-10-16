import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'statistics-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  @Output() selectedFormDataEvent = new EventEmitter<any>();
  @Input() formDataSubject: BehaviorSubject<object|null>;

  constructor() { }

  ngOnInit() {
    this.selectedFormDataEvent.emit('hello form component');

    // read the form details provided
    this.formDataSubject.subscribe(response => this.processForm(response));
  }

  processForm(formData) {
    console.log('response from process form is ', formData);
  }

}
