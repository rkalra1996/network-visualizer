import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
// tslint:disable-next-line: max-line-length
import { StatisticSidebarDataService } from 'src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service';
import { StatisticalFormUtilityService } from '../../services/statistical-form-utility/statistical-form-utility.service';
import { StatisticalAnalysisResultService } from '../../services/statistical-analysis-result/statistical-analysis-result.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'algo-runner-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  selectedAlgo: any;
  processedData: object;
  flag: boolean;

  constructor(public activatedRoute: ActivatedRoute, public statisticSideBarData: StatisticSidebarDataService,
              private statiscticalUtilitySrvc: StatisticalFormUtilityService,
              public statisticalAnalysisResult: StatisticalAnalysisResultService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(map(p => p.id)).subscribe(data => {
      this.initializeData(data);
    });
    this.statisticalAnalysisResult.flag$.subscribe(data => this.flag = data);
  }
  /**
   * Initializes data
   * @param data Algo name from route
   * @description selects a particular algo object from the list of all algorithms
   */
  initializeData(data) {
       this.statisticSideBarData.algoList$.subscribe(list => {
         // process the data accordingly
        this.processedData = this.statiscticalUtilitySrvc.processData(list);
        if (data === undefined) {
          this.selectedAlgo = list[0];
        } else {
          list.forEach( (item) => {
            if (data === ( item.title.replace(/\s/g, '')).toLowerCase()) {
             this.selectedAlgo = item;
              }
          });
       }
       });
}
}
