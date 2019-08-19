import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageManagementService {

  private storageMethods = {
    cache: true,
    ls: true
  };

  constructor() { }

  setItem(itemObj, type = 'ls') {
    // this method is used to set data to localstorage by default
    if (!!itemObj['key']) {
      if (type === 'ls') {
        if ( localStorage.setItem(itemObj['key'], JSON.stringify(itemObj['value'])) === undefined) {
          // data set in localStorage
          return true;
        }
      }
    } else {
      // return empty string by default
      return false;
    }
  }
  getItem(item, type = 'ls') {
    // this method is used to get data from localstorage by default
    if (!!item) {
      if (type === 'ls') {
        const retrievedItem = localStorage.getItem(item);
        if (!!retrievedItem) {
          return retrievedItem;
        } else {
          return '';
        }
      }
    } else {
      // return empty string by default
      return '';
    }
  }
}
