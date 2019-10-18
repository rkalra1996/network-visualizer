import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-statistical-result',
  templateUrl: './statistical-result.component.html',
  styleUrls: ['./statistical-result.component.scss']
})
export class StatisticalResultComponent implements OnInit, OnChanges , AfterViewInit {

  constructor() { }

  ngOnInit() {
    alert('hrllo');
  }
  ngOnChanges() {
    alert('Onchanges');
  }
  ngAfterViewInit() {
    alert('AFterViewInit');
  }

}
