import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'algo-runner-statistical-content',
  templateUrl: './statistical-content.component.html',
  styleUrls: ['./statistical-content.component.scss']
})
export class StatisticalContentComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
