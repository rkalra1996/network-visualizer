import { Component, OnInit } from '@angular/core';

import {ColorServiceService} from './../../../services/colorService/color-service.service';
import {SharedGraphService} from './../../../../core/services/shared-graph.service';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss']
})
export class ColorPanelComponent implements OnInit {

  public colorObject = undefined;
  public showDeletedData = false;
  public objectKeys = [];
  public colorData = [];
  public showDropDown = true;
  constructor(private colorSrvc: ColorServiceService, private sharedGraphSrvc: SharedGraphService) { }

  ngOnInit() {
    // get color panel details
    this.colorSrvc.colorObj$.subscribe(data => {
      this.colorObject = data;
      // console.log('color object is ', this.colorObject);
      this.objectKeys = Object.keys(this.colorObject);

      this.processColors(this.objectKeys, this.colorObject);
      // console.log('processed color data is ', this.colorData);
    });

    // to monitor toggle status
    this.sharedGraphSrvc.showDeletedData.subscribe(toggle => {
      // console.log('recieved toggle', toggle);
      if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
        // if the toggle variable is  only true and false and nothing else
        this.showDeletedData = toggle;
      } else {
        // set to false by default
        this.showDeletedData = false;
      }
    });
  }

  processColors(keyArray, colorObj) {
    if (!!keyArray.length || !!Object.keys(colorObj).length) {
      // both have the data , kindly process
      keyArray.map(key => {
        // for each key create a new object which has item name and item color
        this.colorData.push({name: key, color: colorObj[key]});
      });
    } else {
      console.log('empty key Array or colorObj in color panel');
      return [];
    }
  }

  toggleDropdown() {
    this.showDropDown = !this.showDropDown;
  }

}
