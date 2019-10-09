import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, map, merge } from 'rxjs/operators';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'algo-runner-modal-row-renderer',
  templateUrl: './modal-row-renderer.component.html',
  styleUrls: ['./modal-row-renderer.component.scss']
})
export class ModalRowRendererComponent implements OnInit {

  @Input() labelName = null;
  @Input() labelDropDown: Array<string> = null;
  @Input() dependentOn: string | undefined | null = null;

  @Output() selectedDropDown = new EventEmitter<object>();

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  constructor() { }

  ngOnInit() {
  }

  onDropdownChange(event , label: string = '') {
    // send the selected value out
    console.log({key: this.labelName, value: event.target.value});
    this.selectedDropDown.emit({key: label, value: event.target.value});

  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      merge(this.focus$),
      map(term => (term === '' ? this.labelDropDown
        : this.labelDropDown.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    )

    clickEvents($event, typeaheadInstance) {
      if (typeaheadInstance.isPopupOpen()) {
        this.click$.next($event.target.value);
      }
    }

}
