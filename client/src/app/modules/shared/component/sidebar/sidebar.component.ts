import { Component, OnInit, ViewChild } from '@angular/core';
import { SuiMultiSelect } from 'ng2-semantic-ui/dist';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  orgOptions=[];
  relationOptions=[];
  constructor() { }
  
  ngOnInit() {
    this.orgOptions=["org 1","org 2","org 3","org 4","org 5","org 6"];
    this.relationOptions=["Rel 1","Rel 2","Rel 3","Rel 4","Rel 5","Rel 6"];
    }
   
}
