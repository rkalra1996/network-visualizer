import { Injectable } from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import { PublicHttpService } from '../public/public-http/public-http.service';
import { HttpHeaders } from '@angular/common/http';

// import {PublicHttpService} from '@network-visualizer-core/public-http/PublicHttpService';

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
    return this.publicHttp.post(url,body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getNodeLabels() : Observable<any> {
    // const url = 'http://localhost:3050/api/graph/labeldata';
    // return this.publicHttp.get(url).pipe(map(data => {
    //   if (!!data) {
    //     return data;
    //   } else {
    //     return of({});
    //   }
    // }));
    let data = {
      "Name": [
        "Advaith Foundation", 
"Anahad", 
"Annalie Killian", 
"Arghyam", 
"Ashoka Fellows", 
"ATREE", 
"Avanti Finance", 
"Bharat Innovation Fund", 
"Bill Gates", 
"Bloomberg (NEF)", 
"BMGF", 
"Brookings", 
"Central Square Foundation", 
"CGD", 
"Chandler Foundation", 
"Cisco", 
"Clearly Vision", 
"Co-Impact", 
"Dasra", 
"Dell", 
"Dept. of Agriculture (AP)", 
"Digital Green", 
"Drucker Forum", 
"ECHO", 
"Edumentum", 
"eGovernments", 
"EkStep", 
"Ford Foundation", 
"Gates Foundation", 
"Giving Pledge", 
"Greymatters Capital", 
"Harambee", 
"Health Stack", 
"ICICI", 
"IDR", 
"IIITB", 
"IIMB", 
"ILIMI", 
"In The Field", 
"Ingrid Srinath", 
"IPI", 
"ISDM", 
"iSpirt", 
"JPAL", 
"Last Mile Health", 
"London Business School", 
"MHRD", 
"Mindtree Org", 
"MoHUA", 
"N/Core", 
"NIIT", 
"Nilekani Philanthropies", 
"NIUA", 
"Omidyar Network", 
"Open Mobility", 
"PIE (Livelihoods)", 
"Pivotal Ventures", 
"Pratham Books", 
"Project Evident", 
"Raj Shah", 
"Rita McGrath", 
"SAMA", 
"Sangeet Paul Chaudhry", 
"Santhosh Mathew", 
"ShikshaLokam", 
"Skill Stack", 
"Social Alpha",
"Societal Platform Team", 
"Stanford PACS", 
"Stefan Dercon", 
"Tarento", 
"Tasvereein", 
"Tata Trusts", 
"Thomas Friedman", 
"Unilever", 
"Unleash", 
"Vayam", 
"Venkat Ramaswamy", 
"Vidhi Legal", 
"World Bank"

      ],
      "Type": [
        "Philanthropy", 
"NGO/CBO", 
"Consulting", 
"Research Institute", 
"Private Sector", 
"Government", 
"Impact Investor", 
"Media", 
"Academia", 
"International Agency"

      ],
      "Represent": [
        "Capital", 
        "Reach", 
        "Research Capacity", 
        "Platform", 
        "Talent", 
        "Technology Expertise", 
        "Partners", 
        "Advisory"
        
      ],
      "Status":[
        "Active",
        "Dormant"
      ],
      "Understanding of SP Thinking":[
        "Defined",
        "Early",
        "Mature"
      ],
      "Connection": [
        "Connected"
      ],
      "Relationships": [
        "Advisory",
        "Collaborator",
        "Partner",
        "Service Provider"
      ]
    }
    return of(data);
  }
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
    return this.publicHttp.post(url,body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
 }
