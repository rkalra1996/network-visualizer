import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticalAnalysisResultService } from '../../services/statistical-analysis-result/statistical-analysis-result.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'statistics-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.scss']
})
export class RouteButtonComponent implements OnInit {

  constructor(public router: Router, public statisticalAnalysisResult: StatisticalAnalysisResultService) { }

  ngOnInit() {
  }
/**
 * Routes to filters
 * @description navigate to home page
 */
routeToFilters() {
this.statisticalAnalysisResult.renderAnalysisResult(false);
this.router.navigate(['']);
}
}
