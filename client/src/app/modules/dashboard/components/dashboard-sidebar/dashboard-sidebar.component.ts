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
      this.selectedGraph=[];
      this.searchGraphData=[];
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
       this.selectedRelationship.push({type:rel,value:[]});
     });
     this.searchGraphData.push({nodes:this.selectedGraph,edges:this.selectedRelationship})
     //console.log('or',this.searchGraphData);
    }

    // Method gives new edgesArray with related node ids
    getRelatedNodeIdArrayFromEdges(selectedNodeId){
      console.log('rel',this.relationOptions);
      // this.relationOptions.filter(rel=>{
      //   let temArray=[];
      // this.graphInitData[0]['seperateEdges'].filter(edge=>{
        
      //   if(rel === edge.label){
      //       temArray.push(edge.from);
      //       temArray.push(edge.to);
      //     }          
      //   });
      //   temArray = temArray.filter(this.onlyUnique);
      //   this.edgesNewObject.push({type:rel,nodeid:temArray});        
      //  });
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

    // Method gives selected node id
    getSelectedNodeId(nodeName){
      let temId;
      this.graphInitData[0]['seperateNodes'].filter(node=>{
        if(nodeName === node.label){
          temId = node.id;
        }
      });
      return temId;
    }

    // Get all node id related with selected node id
    getAllRelatedNodeId(selectedNodeId){
      let allNodeId = [];
      let present = false;
      this.edgesNewObject.filter(edge=>{
        edge['nodeid'].filter(nodeid=>{
          if(nodeid === selectedNodeId){
            present = true;
          }
        });
        if(present){
          edge['nodeid'].filter(nodeid=>{
          allNodeId.push(nodeid);
          });
          present=false;
          }
        });
        allNodeId=allNodeId.filter(this.onlyUnique);
        console.log('all',allNodeId);
        return allNodeId;
    }

    searchElement(){
      let selectedNodeId=this.getSelectedNodeId("Wipro");
      console.log('id',selectedNodeId);
      let temNewRelatedNodeId = this.getRelatedNodeIdArrayFromEdges(selectedNodeId);
      console.log('new',temNewRelatedNodeId);
      //let temallRealtedNodeId = this.getAllRelatedNodeId(selectedNodeId);
      temNewRelatedNodeId.filter(id=>{
        this.graphInitData[0]['seperateNodes'].filter(node=>{
        if(id === node.id && node.type[0] === 'Department'){
          this.departmentOptions = node.lable;
          //console.log('match',id, node.type[0], node.label);
        }else if(id === node.id && node.type[0] === 'Person'){
          this.personOptions = node.label;
          //console.log('match2',id, node.type[0], node.label);
          }
        });
      });
      
    }
}
