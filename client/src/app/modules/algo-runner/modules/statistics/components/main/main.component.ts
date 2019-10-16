import { Component, OnInit } from '@angular/core';

import {select} from '@angular-redux/store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'algo-runner-statistics-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @select() appliedFilters;
  constructor() { }

  ngOnInit() {
    this.appliedFilters.subscribe( res => {
      console.log('inside the new route ', res);
    });
  }

}
