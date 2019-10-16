import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'statistical-priority-card',
  templateUrl: './priority-card.component.html',
  styleUrls: ['./priority-card.component.scss']
})
export class PriorityCardComponent implements OnInit {

  @Output() updatedPriorityEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.updatedPriorityEvent.emit('hello priority');
  }

}
