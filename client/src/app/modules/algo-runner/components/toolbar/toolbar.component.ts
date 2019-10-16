import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import {ToolbarSharedService} from './../../services/toolbar-shared-service/toolbar-shared.service';

import {CostingModalInputInterface} from './../../interfaces/costing-modal-input';

declare var $: any;

@Component({
  selector: 'algo-runner-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  private nodeRelDataObject: object = {};

  constructor(private router: Router, private toolbarShrdSrvc: ToolbarSharedService) {
  }

  ngOnInit() {
    this.toolbarShrdSrvc.nodeRelationsDetailsEvent.subscribe(NRData => {
      console.log('recieved in the toolbar component', NRData);
    }, err => {
      console.log(err);
    });

    $('#exampleModalCenter').on('hidden.bs.modal', (hiddenEvent) => {
      console.log('costing modal hidden');
    });

    // retrieve the nodeRelation details via static variable
    this.nodeRelDataObject = _.cloneDeep(this.toolbarShrdSrvc.nodeRelationDetailsData);
  }

  /**
   * Opens costing modal
   * @description To open the bootstrap modal assigned for costing modal
   */
  openCostingModal() {
    $(() => {
      $('#exampleModalCenter').modal('show');
    });
  }

  /**
   * Initiates statistics
   * @description To redirect to the /statistics/home page where statistics workflow will start
   */
  initiateStatistics() {
    this.router.navigate(['/statistics', 'home']);
  }

}
