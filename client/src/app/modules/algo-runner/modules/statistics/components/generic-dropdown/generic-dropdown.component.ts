import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'statistics-generic-dropdown',
  templateUrl: './generic-dropdown.component.html',
  styleUrls: ['./generic-dropdown.component.scss']
})
export class GenericDropdownComponent implements OnInit, OnChanges {

  @Input() dropdownData: object| null;
  @Input() formgroup: FormGroup;
  @Output() clickedEvent = new EventEmitter<object|null>();
  data: object| null;
  selectedOption: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // detect if the component has recieved any data
    this.data = this.dropdownData;
    console.log('recieved data in the dropdown ', this.data);
  }

  emitSelectedValue(event, key) {
    if (event) {
      let val = {};
      val[key] = event;
      this.clickedEvent.emit(val);
    }
  }

   get isValid() {
    return this.formgroup.controls[this.data['label']].valid;
  }

}
