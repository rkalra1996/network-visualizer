import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolbarSharedService {

  private sidebarFilterSubject = new Subject<object>();
  public sidebarFiltersEvent = this.sidebarFilterSubject.pipe(shareReplay(1));

  private nodeRelationDetailsSubject = new Subject<object>();
  public nodeRelationsDetailsEvent = this.nodeRelationDetailsSubject.pipe(shareReplay(1));

  private nodeRelationDetailsVar: object = {};

  constructor() { }

  /**
   * Sends recent filters
   * @description To send the filter object selected by the user in the sidebar
   * @param recentFilterData
   */
  sendRecentFilters(recentFilterData: object) {
    console.log('Sending side bar filters data as ', recentFilterData);
    this.sidebarFilterSubject.next(recentFilterData);
  }

  /**
   * Sends node relation details
   * @param nodeRelationObject 
   */
  sendNodeRelationDetails(nodeRelationObject: object) {
    console.log('Sending node and relations details', nodeRelationObject);
    this.nodeRelationDetailsSubject.next(nodeRelationObject);
  }

  /**
   * Sends node relation details static
   * @param nodeRelationObject
   */
  sendNodeRelationDetailsStatic(nodeRelationObject: object) {
    console.log('Sending node and relations details', nodeRelationObject);
    this.nodeRelationDetailsVar = nodeRelationObject;
  }

  /**
   * Gets node relation details data
   * @description Getter function to return nodeRelationDetailsVar set by sidebar
   */
  get nodeRelationDetailsData() {
    return this.nodeRelationDetailsVar;
  }
}
