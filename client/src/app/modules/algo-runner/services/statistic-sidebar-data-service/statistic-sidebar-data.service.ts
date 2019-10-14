import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticSidebarDataService {
private algoList = new BehaviorSubject<Array<any>>([]);
public algoList$: Observable<Array<any>> = this.algoList.asObservable();
/* listOfAlgo = ['Shortest Path', 'Top Connected Node', 'Top Interacting Node', 'Network Sentiments',
'Recommended Skills', 'Recommended Nodes', 'Nodes Centrality'];
 */
listOfAlgo = [{title: 'Shortest Path', description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
 <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>`,
 imageUrl: `../../../../../assets/shortest_path.png`},
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
imageUrl: `../../../../../assets/top_connected_node.png`},

{title: 'Top Interacting Node' , description: `` ,
 imageUrl: ``},

{title: 'Network Sentiments' , description: ``,
imageUrl: ``},

{title: 'Recommended Skills' , description: `` ,
 imageUrl: ``},

{ title: 'Recommended Nodes' , description: `` ,
 imageUrl: ``},

{ title: 'Nodes Centrality' , description: `` ,
 imageUrl: ``}];
  constructor() {
    this.algoList.next(this.listOfAlgo);
  }
}
