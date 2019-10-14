import { Component, OnInit, Input, OnChanges } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { StatisticSidebarDataService } from 'src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'algo-runner-statistical-content',
  templateUrl: './statistical-content.component.html',
  styleUrls: ['./statistical-content.component.scss']
})
export class StatisticalContentComponent implements OnInit {
@Input() data: any;
  constructor(public statisticSideBarData: StatisticSidebarDataService) { }

  ngOnInit() {
  }
}
