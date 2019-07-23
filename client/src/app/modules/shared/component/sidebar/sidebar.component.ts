import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SuiMultiSelect } from 'ng2-semantic-ui/dist';
import { GraphDataService } from '../../../core/services/graph-data-service/graph-data.service';
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
  selectedRelationship:{ type: string, value: Array<string> }[] = [];
  selectedGraph:{ type: string, value: Array<string> }[] = [];
  searchGraphData:{nodes:Array<object>,edges:Array<object>}[] = [];
  constructor(private graphDataService: GraphDataService) { }
  
  
  ngOnInit() {
    this.getGraph();
    }
   networkElementClick(element){
   if(element){
      this.eventClicked.emit(element);
     }
   }
   getGraph(){
    this.graphDataService.getInitialData().subscribe(data=>{
      let temorg = [];
      let temdep = [];
      let temper = [];
      if(data && data['seperateNodes'] && data['seperateEdges']){
        data['seperateNodes'].filter(node=>{
          if(node.type[0] === "Organisation"){
            temorg.push(node.label);
          }else if(node.type[0] === "Department"){
            temdep.push(node.label);
          }else if(node.type[0] === "Person"){
            temper.push(node.label);
          }        
        });
        data['seperateEdges'].filter(edge=>{
            this.relationOptions.push(edge.label);
          });
      }      
      function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
      this.relationOptions =this.relationOptions.filter( onlyUnique );
      this.orgOptions = temorg;
      this.departmentOptions = temdep;
      this.personOptions = temper;
      });
   }
   
   searchGraph(){
    this.selectedGraph.push({type:"Organisation",value:this.selectedOrg});
    this.selectedGraph.push({type:"Department",value:this.selectedDepartment});
    this.selectedGraph.push({type:"Person",value:this.selectedPerson});
    this.selectedRelation.filter(rel=>{
      this.selectedRelationship.push({type:rel,value:[]});
    });
    this.searchGraphData.push({nodes:this.selectedGraph,edges:this.selectedRelationship})
    console.log('or',this.searchGraphData);
   }
}
