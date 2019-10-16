import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit, OnChanges {

  // Public variables for template
  public newTypeColor;

  // Private variables for component
  // public default = '#36cc95';
  public default = '#96C1FA';
  
  // Input variables from parent
  @Input() elDefault: string | null = null;
  @Input() elWidth: string | null = '50px';

  // Output from the component to parent
  @Output() selectedColorCode = new BehaviorSubject<string>(this.default);

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.newTypeColor = this.elDefault || this.default;
  }

  selectedColor(SelectedColorEvent) {
    if (SelectedColorEvent.length) {
      console.log('user selected newcolor code', SelectedColorEvent);
      this.selectedColorCode.next(SelectedColorEvent);
    }
  }

}
