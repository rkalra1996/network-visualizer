import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-nodes',
  templateUrl: './create-nodes.component.html',
  styleUrls: ['./create-nodes.component.scss']
})
export class CreateNodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createNode() {
    alert('create Node');
  }
  editNode() {
    alert('edit Node');
  }
  deleteNode() {
    alert('delete Node');
  }
  createRelation() {
    alert('create Relation');
  }
  editRelation() {
    alert('edit Relation');
  }
  deleteRelation() {
    alert('delete Relation');
  }

}
