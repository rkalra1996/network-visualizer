import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import {Network, DataSet, Node, Edge, IdType} from 'vis';
import { SharedGraphService } from 'src/app/modules/core/services/shared-graph.service';
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
  selectedRelationship:{ type: string }[] = [];
  selectedGraph:{ type: string, value: Array<string> }[] = [];
  public graphData = {};
  count : number = 1;
  relstatus: boolean = false;
  preSelectedRel : string;
    
  edgesNewObject:{type:string, nodeid: Array<number>}[] = [];
  nodesNewObject:{type:string, nodeid: Array<number>}[] = [];
  graphInitData:Array<object> = [];
  constructor(private graphDataService: GraphDataService, private sharedGraphData: SharedGraphService) { }

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
       if(data){
         if(data['seperateNodes'] && data['seperateEdges']){
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
       }
        
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
      if(this.selectedOrg.length>0 || this.selectedDepartment.length>0 || this.selectedPerson.length>0){
      this.selectedGraph=[];
      this.selectedRelationship=[];
      if(this.selectedOrg.length>0){
        this.selectedGraph.push({type:"Organisation",value:this.selectedOrg});
      }
     if(this.selectedDepartment.length>0){
      this.selectedGraph.push({type:"Department",value:this.selectedDepartment});
     }
     if(this.selectedPerson.length>0){
      this.selectedGraph.push({type:"Person",value:this.selectedPerson});
     }
     this.selectedRelation.filter(rel=>{
       this.selectedRelationship.push({type:rel});
     });

     let requestBody = {nodes:this.selectedGraph,edges:this.selectedRelationship};
     
     this.sharedGraphData.setGraphData(requestBody);
     if(this.count === 1){
      this.eventClicked.emit('search'+this.count);
      this.count = 2;
     }else{
      this.eventClicked.emit('search'+this.count);
      this.count = 1;
     }
    }
  }
    
    // Method gives new edgesArray with related node ids
    getRelatedNodeIdArrayFromEdges(selectedNodeId){
      if(this.graphInitData.length>0){
      // console.log('rel',this.relationOptions);
      let temArray=[];
      this.graphInitData[0]['seperateEdges'].filter(edge=>{
        if(selectedNodeId === edge.from){
          temArray.push(edge.to);
        }else if(selectedNodeId === edge.to){
          temArray.push(edge.from);
        }
      });
      temArray = temArray.filter(this.onlyUnique);
      return temArray;
    }
}
    // Method gives selected node id
    getSelectedNodeId(nodeName){
      let temId;
      if(this.graphInitData.length>0){
      this.graphInitData[0]['seperateNodes'].filter(node=>{
        if(nodeName === node.label){
          temId = node.id;
        }
      });
      return temId;
      }
    }

    searchElement(){
      let temdep = [];
      let temper = [];
      if(this.graphInitData.length>0){
      if(this.selectedOrg.length>0){
        this.selectedOrg.filter(org=>{
          let selectedNodeId=this.getSelectedNodeId(org);
          // console.log('id',selectedNodeId);
          let temNewRelatedNodeId = this.getRelatedNodeIdArrayFromEdges(selectedNodeId);
          // console.log('new',temNewRelatedNodeId);
          temNewRelatedNodeId.filter(id=>{
            this.graphInitData[0]['seperateNodes'].filter(node=>{
            if(id === node.id && node.type[0] === 'Department'){
              temdep.push(node.label);
            }else if(id === node.id && node.type[0] === 'Person'){
              temper.push(node.label);
              }
            });
          });
         });
         temdep = temdep.filter(this.onlyUnique);
         temper = temper.filter(this.onlyUnique);
        this.departmentOptions = temdep;
        this.personOptions = temper;
      }
    }
      
    }

    resetGraph(){
      this.getGraph();
      this.selectedOrg = [];
      this.selectedDepartment = [];
      this.selectedPerson = [];
      if(this.preSelectedRel){
        var element = document.getElementById(this.preSelectedRel);
        element.classList.remove("selected"); 
       }
      this.eventClicked.emit('reset');
   }
   relationclickEvent(selectedRelation){
     if(this.preSelectedRel){
      var element = document.getElementById(this.preSelectedRel);
      element.classList.remove("selected"); 
     }
    var element = document.getElementById(selectedRelation);
    element.classList.add("selected");
    this.selectedRelationship = [];
    this.relstatus = !this.relstatus;
    this.selectedRelationship.push({type:selectedRelation});
    let requestBody = {nodes:[],edges:this.selectedRelationship};
    console.log("re",requestBody);
    this.sharedGraphData.setGraphData(requestBody);
    if(this.count === 1){
      this.eventClicked.emit('search'+this.count);
      this.count = 2;
     }else{
      this.eventClicked.emit('search'+this.count);
      this.count = 1;
     }
    this.preSelectedRel=selectedRelation;
   }
}
