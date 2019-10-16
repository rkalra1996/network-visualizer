import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
// tslint:disable-next-line: max-line-length
import { StatisticSidebarDataService } from 'src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'algo-runner-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  selectedAlgo: any;

  constructor(public activatedRoute: ActivatedRoute, public statisticSideBarData: StatisticSidebarDataService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(map(p => p.id)).subscribe(data => {
      this.initializeData(data);
    });
  }
  /**
   * Initializes data
   * @param data Algo name from route
   * @description selects a particular algo object from the list of all algorithms
   */
  initializeData(data) {
       this.statisticSideBarData.algoList$.subscribe(list => {
        if (data === undefined) {
          this.selectedAlgo = list[0];
        } else {
          list.forEach( (item , i) => {
            if (data === ( list[i].title.replace(/\s/g, '')).toLowerCase()) {
             this.selectedAlgo = list[i];
              }
          });
       }
       });
}
}
