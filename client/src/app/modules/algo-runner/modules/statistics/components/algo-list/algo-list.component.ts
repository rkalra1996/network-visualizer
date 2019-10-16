import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-algo-list',
  templateUrl: './algo-list.component.html',
  styleUrls: ['./algo-list.component.scss']
})
export class AlgoListComponent implements OnInit {
@Input() data: any;
@Input() firstVisit: boolean;
@Output() clicked = new EventEmitter();
  selectedIndex: any;
  constructor() { }

  ngOnInit() {
    console.log('List of algos', this.data);
  }

  // Emitting the name of algo selected
  emitData(data, index) {
    this.firstVisit = false;
    this.selectedIndex = index;
    this.clicked.emit(data);
  }
}
