import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
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

  edgesNewObject:{type:string, nodeid: Array<number>}[] = [];
  nodesNewObject:{type:string, nodeid: Array<number>}[] = [];
  graphInitData:Array<object> = [];
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
       this.graphInitData.push(data);
       let temorg = [];
       let temdep = [];
       let temper = [];
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
        
       this.relationOptions =this.relationOptions.filter( this.onlyUnique );
       this.orgOptions = temorg;
       this.departmentOptions = temdep;
       this.personOptions = temper;
       });
    }
    
    onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
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
