import { Component, OnInit } from '@angular/core';
import { StatisticSidebarDataService } from 'src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-statistic-sidebar',
  templateUrl: './statistic-sidebar.component.html',
  styleUrls: ['./statistic-sidebar.component.scss']
})
export class StatisticSidebarComponent implements OnInit {
  sideBarAlgoData: any[];
  selectedAlgoName: any;

  constructor(public statisticSidebarData: StatisticSidebarDataService,public router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Retrieving list of algorithms
    this.statisticSidebarData.algoList$.subscribe(data=>this.sideBarAlgoData=data)
  }
// Retrieving selected algo
  viewDetail(data){
    this.selectedAlgoName=data.replace(/\s/g, "");
    this.router.navigate([{outlets:{ Details :['',this.selectedAlgoName]}}], {relativeTo: this.activatedRoute});
  }
}
