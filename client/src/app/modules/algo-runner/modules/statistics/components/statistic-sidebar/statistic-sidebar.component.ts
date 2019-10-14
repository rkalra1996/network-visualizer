import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { StatisticSidebarDataService } from 'src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-statistic-sidebar',
  templateUrl: './statistic-sidebar.component.html',
  styleUrls: ['./statistic-sidebar.component.scss']
})
export class StatisticSidebarComponent implements OnInit {
  sideBarAlgoData = [];
  selectedAlgoName: any;

  constructor(public statisticSidebarData: StatisticSidebarDataService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Retrieving list of algorithms
    this.statisticSidebarData.algoList$.subscribe(data => {
      data.forEach( (element) => {
        const title = element.title;
        this.sideBarAlgoData.push(title);
      });
    });
  }
  /**
   * Views detail
   * @param data name of selected algo
   * @description route to details page component
   */
  viewDetail(data) {
    this.selectedAlgoName = (data.replace(/\s/g, '')).toLowerCase();
    this.router.navigate([{outlets: { Details : ['', this.selectedAlgoName]}}], {relativeTo: this.activatedRoute});
  }
}
