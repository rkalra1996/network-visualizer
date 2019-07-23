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
    Name : {
      rotate : false,
      color : '#D2E5FE'
    },
    Type : {
      rotate: false,
      color : '#D2E5FE'
    },
    Represent : {
      rotate: false,
      color: '#D2E5FE'
    },
    Connection : {
      rotate: false,
      color: '#D2E5FE'
    },
    Status : {
      rotate: false,
      color: '#D2E5FE'
    },
    Understanding : {
      rotate: false,
      color: '#D2E5FE'
    },
    Url : {
      rotate: false,
      color: '#D2E5FE'
    }
  }
  @Output() eventClicked = new EventEmitter<string>();
  nameOptions: Array<string> = [];
  relationOptions: Array<string> = [];
  typeOptions: Array<string> = [];
  representOptions: Array<string> = [];
  connectionOptions: Array<string> = [];
  statusOptions: Array<string> = [];
  understandingOptions: Array<string> = [];
  urlOptions: Array<string> = [];
  selectedRelationship: {type: Array<string>}[] = [];
  selectedName: Array<string> =[];
  selectedRelation: Array<string> =[];
  selectedType: Array<string> =[];
  selectedRepresent: Array<string> =[];
  selectedConnection:Array<string> =[];
  selectedStatus:{ type: string }[] = [];
  selectedUnderstanding:{ type: string }[] = [];
  selectedUrl:{ type: string }[] = [];
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
     this.graphDataService.getNodeOptions().subscribe(data=>{
       this.graphInitData.push(data);
       let temname = [];
       let temtype = [];
       let temrepresent = [];
       let temconnection = [];
       if(data){
        data['Name'].filter(node=>{
            temname.push(node);
        });
        data['Type'].filter(node=>{
          temtype.push(node);
        });
        data['Represent'].filter(node=>{
          temrepresent.push(node);
        });
        data['Connection'].filter(node=>{
          temconnection.push(node);
        })
      }
        this.nameOptions = temname;
        this.typeOptions = temtype;
        this.representOptions = temrepresent;
        this.connectionOptions = temconnection;
       });
    }
    
    onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

    searchGraph(){
      if(this.selectedName.length>0 || this.selectedType.length>0 || this.selectedConnection.length>0 || this.selectedRepresent.length>0){
        this.selectedGraph=[];
        this.selectedGraph.push({type:"Network Elements",value:this.selectedName});
        this.selectedGraph.push({type:"Network Elements",value:this.selectedType});
        this.selectedGraph.push({type:"Network Elements",value:this.selectedConnection});
        this.selectedGraph.push({type:"Network Elements",value:this.selectedRepresent});
      let requestBody = {nodes:this.selectedGraph};
     
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
    //   if(this.graphInitData.length>0){
    //   if(this.selectedName.length>0){
    //     this.selectedName.filter(name=>{
    //       let selectedNodeId=this.getSelectedNodeId(name);
    //       console.log('id',selectedNodeId);
    //       let temNewRelatedNodeId = this.getRelatedNodeIdArrayFromEdges(selectedNodeId);
    //       console.log('new',temNewRelatedNodeId);
    //       if(temNewRelatedNodeId){
    //         temNewRelatedNodeId.filter(id=>{
    //           this.graphInitData[0]['seperateNodes'].filter(node=>{
    //           if(id === node.id && node.type[0] === 'Department'){
    //             temdep.push(node.label);
    //           }else if(id === node.id && node.type[0] === 'Person'){
    //             temper.push(node.label);
    //             }
    //           });
    //         });
    //       }         
    //      });
    //      temdep = temdep.filter(this.onlyUnique);
    //      temper = temper.filter(this.onlyUnique);
    //     this.typeOptions = temdep;
    //     this.representOptions = temper;
    //   }
    // }
      
    }

    resetGraph(){
      this.getGraph();
      this.selectedName = [];
      this.selectedType = [];
      this.selectedRepresent = [];
      this.selectedStatus = [];
      this.selectedConnection = [];
      this.selectedUnderstanding = [];
      this.selectedUrl = [];
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
