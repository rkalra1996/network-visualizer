import { Component, OnInit, ViewChild } from '@angular/core';
import { SuiMultiSelect } from 'ng2-semantic-ui/dist';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  options=[];
  selected=[];
  filteredOptions={};
  @ViewChild('org')
  org: SuiMultiSelect<any, any>;
  constructor() { }
  
  ngOnInit() {
    this.filteredOptions=["hello","hi","morning","james","jhon","tom"];
    this.selected=[];
    this.options=[];
  }
   
}
