import { Component, OnInit, Input, OnChanges } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { StatisticSidebarDataService } from 'src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'algo-runner-statistical-content',
  templateUrl: './statistical-content.component.html',
  styleUrls: ['./statistical-content.component.scss']
})
export class StatisticalContentComponent implements OnInit, OnChanges {
@Input() data: any;
  constructor(public statisticSideBarData: StatisticSidebarDataService) { }

  ngOnInit() {
    /* this.statisticSideBarData.algoList$.subscribe(list => {
    list.forEach( (item) => {
             if (this.data === item.title.replace(/\s/g, '').toLowerCase()) {
               this.data = item.title;
             }
    } );
    }); */
  }

  ngOnChanges() {
  this.ngOnInit();
  }
}
