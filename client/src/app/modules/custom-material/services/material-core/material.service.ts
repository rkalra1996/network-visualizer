import { Injectable } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarConfig} from '@angular/material/snack-bar';
import {ConfigService} from './../config/config.service';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private DEAFAULT_SNACKBAR_CONFIG: MatSnackBarConfig | null = null;

  public snackBar = {
    notify : this.notify
  };
  constructor(private sb: MatSnackBar, private configSrvc: ConfigService) {
    this.configSrvc.getConfig('DEFAULT_SNACKBAR_CONFIG').subscribe(newConfig => {
      this.DEAFAULT_SNACKBAR_CONFIG = newConfig;
    }, err => {
      console.log('error while reading new config in material', err);
  });
  }

  notify(notificationObj) {
    let processedData = this.processNotificationObject({...notificationObj, default_class: 'bg-black'});
    this.sb.open(processedData['message'], processedData['action'], processedData['config']);
  }

  success(notificationObj) {
    let processedData = this.processNotificationObject({...notificationObj, default_class: 'bg-success'});
    this.sb.open(processedData['message'], processedData['action'], processedData['config']);
  }

  error(notificationObj){
    let processedData = this.processNotificationObject({...notificationObj, default_class: 'bg-error'});
    this.sb.open(processedData['message'], processedData['action'], processedData['config']);
  }

  warn(notificationObj){
    let processedData = this.processNotificationObject({...notificationObj, default_class: 'bg-warn', horizontalPosition: 'right'});
    this.sb.open(processedData['message'], processedData['action'], processedData['config']);
  }

  processNotificationObject(JSONObj) {
    let processedObj = {};
    processedObj['message'] = (JSONObj.hasOwnProperty('message') && JSONObj['message'].length)?JSONObj['message']:this.DEAFAULT_SNACKBAR_CONFIG['default_text'];
    processedObj['action'] = (JSONObj.hasOwnProperty('action') && JSONObj['action'].length)?JSONObj['action']:this.DEAFAULT_SNACKBAR_CONFIG['default_action'];
    processedObj['config'] = {};
    processedObj['config']['duration'] = JSONObj.hasOwnProperty('duration')?JSONObj['duration']:this.DEAFAULT_SNACKBAR_CONFIG['duration'];
    processedObj['config']['verticalPosition'] = (JSONObj.hasOwnProperty('position') && JSONObj['position'].length)?JSONObj['position']:this.DEAFAULT_SNACKBAR_CONFIG['verticalPosition'];
    processedObj['config']['panelClass'] = (JSONObj.hasOwnProperty('default_class') && JSONObj['default_class'].length)?JSONObj['default_class']:this.DEAFAULT_SNACKBAR_CONFIG['default_class'];
    processedObj['config']['direction'] = JSONObj.hasOwnProperty('direction')?JSONObj['direction']:this.DEAFAULT_SNACKBAR_CONFIG['default_direction'];
    return processedObj;
  }
}
