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
    const url = 'http://localhost:3050/api/initialdata';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getSearchData(body) {
    const url = 'http://localhost:3050/api/graph/data';
    return this.publicHttp.post(url,body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getNodeOptions() : Observable<any> {
    // const url = 'https://api.myjson.com/bins/8rogd';
    // return this.publicHttp.get(url).pipe(map(data => {
    //   if (!!data) {
    //     return data;
    //   } else {
    //     return of({});
    //   }
    // }));
    let data = {
      "Name": [
        "Accenture",
        "Access Agriculture",
        "Action For India",
        "Acumen",
        "Aditya Birla Group",
        "Advaith Foundation",
        "AILSG",
        "Alan Schwartz",
        "Amani Institute",
        "Amazon Public Services",
        "Amnesty International",
        "Anahad",
        "Andrew Ng",
        "Annalie Killian",
        "APF",
        "APPI",
        "APSSDC",
        "Arghyam",
        "Ashoka",
        "Ashoka University",
        "ATREE",
        "Avanti Finance",
        "Bapu Trust",
        "BCG",
        "Benjamin Shuldiner",
        "Bharat Innovation Fund",
        "Bhavtosh Vajpayee",
        "Bill Gates",
        "Bloomberg (NEF)",
        "BMGF",
        "Bosch",
        "BRAC",
        "Bridgespan",
        "British Asian Trust",
        "Brookings",
        "C&R",
        "Cambridge",
        "Cassia",
        "Central Square Foundation",
        "CGD",
        "Chamath Palihapitiya",
        "Chandler Foundation",
        "Chandu Bhave",
        "Chris Anderson",
        "Cisco",
        "Clearly Vision",
        "Co-Impact",
        "Code For America",
        "Columbia",
        "Cornell",
        "Dalberg",
        "Dasra",
        "Dayle Stevens",
        "deAsra",
        "Dell",
        "Deloitte",
        "Dept. of Agriculture (AP)",
        "Deshpande Foundation",
        "Devex",
        "DIAL",
        "Digital Green",
        "DIKSHA",
        "Don Norman",
        "Drucker Forum",
        "ECF",
        "ECHO",
        "Edumentum",
        "eGovernments",
        "EkStep",
        "Equitor",
        "EY",
        "FHI360",
        "Ford Foundation",
        "Founding Fuel",
        "FSG",
        "Fujitsu",
        "Future State",
        "Gates Foundation",
        "GDI",
        "Genpact",
        "Girl Effect",
        "Giving Pledge",
        "Goonj",
        "Goradia Foundation",
        "Grameen",
        "Greymatters Capital",
        "Guidestar",
        "Hank Nun",
        "Harambee",
        "Harry Hertz",
        "Harvard Business School",
        "Harvard Kennedy School",
        "Harvard Medical School",
        "HCG Hospital",
        "Health Stack",
        "Heather McGowan",
        "ICICI",
        "IDR",
        "IIHS",
        "IIITB",
        "IIMB",
        "IISC",
        "IIT-IIT",
        "IKEA",
        "ILIMI",
        "Imago",
        "In The Field",
        "Inclusive Ventures",
        "India Stack",
        "Indian School of Democracy",
        "Ingrid Srinath",
        "Institute For Transformative Tech.",
        "Institute of Product Leadership",
        "Intelehealth",
        "Intuit",
        "IPI",
        "ISDM",
        "Isha Foundation",
        "iSpirt",
        "ITC",
        "John McDermott",
        "JPAL",
        "Landesa",
        "Last Mile Health",
        "Lean Impact",
        "Living Farms",
        "Living Goods",
        "London Business School",
        "LV Eyecare",
        "MAGC",
        "Make A Difference",
        "MasterCard",
        "McKinsey",
        "Mercy Corps",
        "MHRD",
        "Michael Susan Dell Foundation",
        "Microsoft",
        "Mindtree",
        "MIT",
        "N/Core",
        "Nasscom Foundation",
        "National Health Stack",
        "National Skill Stack",
        "NCDEX",
        "New America Foundation",
        "NIEPA",
        "NIIT",
        "Nilekani Philanthropies",
        "NIMHANS",
        "NIUA",
        "NSDC",
        "NSRCEL",
        "NULP",
        "NYU Stern",
        "Ola",
        "Ola Foundation",
        "Omidyar Network",
        "One Acre Fund",
        "Open Mobility",
        "ORF",
        "PAD",
        "Pankaj Jalote",
        "PEI",
        "PEO",
        "Phicus",
        "PIE",
        "Piramal Foundation",
        "Pivotal Ventures",
        "Pratham Books",
        "Precision Ag Development",
        "Project Evident",
        "Project Potential",
        "PwC",
        "Raj Shah",
        "Ram Sewak Sharma",
        "Rockefeller",
        "SAMA",
        "Samagra",
        "Sameer Dua",
        "Samhita",
        "Sangath",
        "Sangeet Paul Chaudhry",
        "Santhosh Mathew",
        "Sara Chamberlain",
        "Sattva",
        "Sheroes",
        "ShikshaLokam",
        "Skill Stack",
        "Skoll",
        "Social Alpha",
        "Socion",
        "Societal Platform Team",
        "SPACS",
        "SPJIMR",
        "Stanford PACS / SSIR",
        "Stefan Dercon",
        "Strategyzer",
        "SVP",
        "Synergos",
        "Tarento",
        "Tasvereein",
        "Tata Trusts",
        "TechSoup",
        "Tel Aviv University",
        "The Banyan",
        "Thomas Friedman",
        "Tom Monahan",
        "TouchKin",
        "Udhyam",
        "Ugly Indian",
        "UMICH / ROSS",
        "UNDP",
        "UNICEF",
        "Unilever",
        "University of Wisconsin",
        "Unleash",
        "UnLtd",
        "UNSDN",
        "UNSSC",
        "Upaya",
        "Urban Clap",
        "Vayam",
        "Venkat Ramaswamy",
        "Vidhi Legal",
        "Villgro",
        "Wadhwani",
        "Wadhwani AI",
        "WEF",
        "White Swan",
        "WHU",
        "World Bank"
      ],
      "Type": [
        "Academia",
        "Consulting",
        "Government",
        "Impact Investor",
        "International Agency",
        "Media",
        "NGO/CBO",
        "People",
        "Philanthropy",
        "Platform",
        "Private Sector",
        "Research Institute"
      ],
      "Represent": [
        "Capital",
        "Talent",
        "Platform",
        "Reach"
      ],
      "Connection": [
        "Connected"
      ]
    }
    return of(data);
  }
  getInitialDataV2() {
    const url = 'http://localhost:3050/api/initialdatav2';
    return this.publicHttp.get(url).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
  getSearchDataV2(body) {
    const url = 'http://localhost:3050/api/graph/datav2';
    return this.publicHttp.post(url,body).pipe(map(data => {
      if (!!data) {
        return data;
      } else {
        return of({});
      }
    }));
  }
 }
