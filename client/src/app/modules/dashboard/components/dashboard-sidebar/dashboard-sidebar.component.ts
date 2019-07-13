import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  public rotateObj = {
    Organisation : {
      rotate : false,
      color : 'pink'
    },
    Department : {
      rotate: false,
      color : 'orange'
    },
    Person : {
      rotate: false,
      color: 'green'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
