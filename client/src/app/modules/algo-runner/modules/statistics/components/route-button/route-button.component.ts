import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'statistics-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.scss']
})
export class RouteButtonComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
/**
 * Routes to filters
 * @description navigate to home page
 */
routeToFilters() {
this.router.navigate(['']);
}
}
