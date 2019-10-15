import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticSidebarDataService {
private algoList = new BehaviorSubject<Array<any>>([]);
public algoList$: Observable<Array<any>> = this.algoList.asObservable();

  private listOfAlgo = [{
    title: 'Shortest Path', 
    description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
 <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>`,
 imageUrl: `../../../../../assets/shortest_path.png`,
algo_form: {}},
{title: 'Top Connected Node' , description: `<p>Top Connected Node measures the number of incoming and outgoing
relationships from a node.</p>
<p>The Top Connected Node algorithm can help us find popular nodes in a graph.</p>
<p>Degree centrality is an important component of any attempt to determine the most
important people on a social network. For example, in BrandWatch’s most influential men and
 women on Twitter 2017 the top 5 people in each category have over 40m followers each.</p>
<p>Weighted degree centrality has been used to help separate fraudsters from legitimate users of an
online auction. The weighted centrality for fraudsters is significantly higher because they tend to
 collude with each other to artificially increase the price of items. Read more in Two Step graph-based semi-supervised
  Learning for Online Auction Fraud Detection</p>
<p></p>` ,
imageUrl: `../../../../../assets/top_connected_node.png`,
algo_form: {}},

{title: 'Top Interacting Node' , description: `` ,
 imageUrl: ``,
algo_form: {}},

{title: 'Network Sentiments' , description: ``,
imageUrl: ``,
algo_form: {}},

{title: 'Recommended Skills' , description: `` ,
 imageUrl: ``,
algo_form: {}},

{ title: 'Recommended Nodes' , description: `` ,
 imageUrl: ``,
algo_form: {}},

{ title: 'Nodes Centrality' , description: `` ,
 imageUrl: ``,
 algo_form: {}}
];
  constructor() {
    this.algoList.next(this.listOfAlgo);
  }

  /**
   * Gets algorithm details
   * @param algoName The name of the algorithm whose data is needed
   * @returns the selected algorithm or empty object otherwise
   */
  getAlgoDetailsByName(algoName: string): Observable<object> {
    // to find the algo_formDetails object of specified algoName
    if (!!algoName) {
      const fetchedData = this.listOfAlgo.find(algoObject => algoObject.title === algoName);
      if (fetchedData.hasOwnProperty('algo_form') && fetchedData.algo_form.constructor === Object) {
        // everything is ok
        return of(fetchedData);
      }
      return of ({});
    } else {
      console.warn('No Data recieved in the algoName to retrieve algo_form details');
      return of({});
    }
  }
}
