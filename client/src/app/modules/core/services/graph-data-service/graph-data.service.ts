import { Injectable } from '@angular/core';
import { Observable, of, pipe, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicHttpService } from '../public/public-http/public-http.service';

import {throwError} from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor(private publicHttp: PublicHttpService) { }

  getInitialData() {
    // const url = 'http://localhost:3050/api/initialdata';
    const url = '/api/initialdata';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getSearchData(body) {
    // const url = 'http://localhost:3050/api/graph/data';
    const url = '/api/graph/data';
    return this.publicHttp.post(url, body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  // getNodeLabelData(): Observable<any> {
  //   // const url = 'http://localhost:3050/api/graph/labeldata';
  //   const url = '/api/graph/labeldata';
  //   return this.publicHttp.get(url).pipe(map(data => {
  //     if (!!data) {
  //       return data;
  //     } else {
  //       return of({});
  //     }
  //   }));
  // }
  getInitialDataV2() {
    // const url = 'http://localhost:3050/api/initialdatav2';
    const url = '/api/initialdatav2';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getSearchDataV2(body) {
    // const url = 'http://localhost:3050/api/graph/datav2';
    const url = '/api/graph/datav2';
    return this.publicHttp.post(url, body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }

  createNewNode(nodeData) {
    const url = '/api/graph/node/create';
    // tslint:disable-next-line: max-line-length
    if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
      // initial conditions are okay, now send the creation request
      return this.publicHttp.post(url, nodeData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    } else {
      return throwError('Invalid data provided');
    }
  }

  updateNode(nodeData) {
    const url = '/api/graph/node/update';
    // tslint:disable-next-line: max-line-length
    if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
      // initial conditions are okay, now send the creation request
      return this.publicHttp.post(url, nodeData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    } else {
      return throwError('Invalid data provided');
    }
  }

  updateRelation(relationData) {
    const url = '/api/graph/relation/update';
    if (relationData.hasOwnProperty('id') && relationData.hasOwnProperty('type')) {
      return this.publicHttp.post(url, relationData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response : 'empty'};
        }
      }));
    } else {
      return throwError('Incomplete data provided');
    }
  }

  createNewRelation(relationData) {
    const url = '/api/graph/relation/create';
    if (relationData.hasOwnProperty('type') &&  relationData.hasOwnProperty('to') && relationData.hasOwnProperty('from') ) {
      // data is okay now prepare to send
      return this.publicHttp.post(url, relationData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    } else {
      return throwError('Invalid data provided');
    }
  }

  getGraphRelations(): Observable<any> {
    const url = '/api/graph/relations';
    return this.publicHttp.get(url).pipe(map (data => {
      return data;
    }));
  }

  getNodeNames() {
    return this.getInitialDataV2().pipe(map(data => {
      let nodeNames = [];
      if (data.hasOwnProperty('seperateNodes')) {
        let newData = _.cloneDeep(data['seperateNodes']);
        newData.forEach(element => {
          nodeNames.push(element['label']);
          return element['label'];
        });
      }
      return nodeNames;
    }));
  }

  deleteNode(nodeData) {
    const url = '/api/graph/node/delete';
    if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('relations')) {
      // data is okay now prepare to send
      return this.publicHttp.post(url, nodeData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    } else {
      return throwError('Invalid data provided');
    }
  }

  deleteRelation(relationIDData) {
    const url = '/api/graph/relation/delete';
    if (relationIDData.hasOwnProperty('id')) {
      // data is okay now prepare to send
      return this.publicHttp.post(url, relationIDData).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return {response: 'empty'};
      }
      }));
    } else {
      return throwError('Invalid data provided');
    }
  }

  getGraphProperties() {
    const url = '/api/graph/properties';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return {response: 'empty'};
    }
    }, err => {
      throwError({error : 'Error while reading graph properties'});
      console.error(err);
    }));
  }

  restoreData(restoreData: object) {
    if (restoreData.constructor === Object && restoreData.hasOwnProperty('nodes') || restoreData.hasOwnProperty('relations')) {
      // check for datatypes of nodes and relations
      if (!Array.isArray(restoreData['nodes']) || !Array.isArray(restoreData['relations'])) {
        console.error('Either nodes or relations key in not an Array in restoreData');
        return throwError({err : 'restoreData is incompatible'});
      } else {
        // data is okay, send it to the server
        const url = '/api/graph/data/restore';
        let requestBody = {
          nodes: restoreData['nodes'],
          relations: restoreData['relations']
        };

        // send it
        return this.publicHttp.post(url, requestBody).pipe(map(data => {
          if (!!data) {
            return data;
          } else {
            return {response: 'empty'};
        }
        }));
      }
    } else {
      console.error('Invalid restorData object from client');
      return throwError({err : 'restoreData is invalid'});
    }
  }
}
