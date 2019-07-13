import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SuiMultiSelect } from 'ng2-semantic-ui/dist';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<string>();
  orgOptions: Array<string> = [];
  relationOptions: Array<string> = [];
  departmentOptions: Array<string> = [];
  personOptions: Array<string> = [];
  selectedOrg: Array<string> =[];
  selectedRelation: Array<string> =[];
  selectedDepartment: Array<string> =[];
  selectedPerson: Array<string> =[];
  constructor() { }
  
  
  ngOnInit() {
    this.getGraph();
    }
   networkElementClick(element){
   if(element){
      this.eventClicked.emit(element);
     }
   }
   getGraph(){
     

   }
   
   searchGraph(){
    console.log('s',this.selectedOrg);
   }
}
