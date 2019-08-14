import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageManagementService {

  private storageMethods = {
    'cache': true,
    'localstorage': true
  }

  constructor() { }

  setItem(item, type = 'localstorage') {
    // this method is used to set data to localstorage by default
  }
  getItem(item, type = 'localstorage') {
    // this method is used to get data from localstorage by default
  }
}
