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
 imageUrl: `../../../../../assets/sample_output.png`},
{title: 'Top Connected Node' , description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
<p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>` ,
imageUrl: `../../../../../assets/sample_output.png`},

{title: 'Top Interacting Node' , description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
 path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
 <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>` ,
 imageUrl: `../../../../../assets/sample_output.png`},

{title: 'Network Sentiments' , description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
<p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>` ,
imageUrl: `../../../../../assets/sample_output.png`},

{title: 'Recommended Skills' , description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
 path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
 <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>` ,
 imageUrl: `../../../../../assets/sample_output.png`},

{ title: 'Recommended Nodes' , description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
 path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
 <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>` ,
 imageUrl: `../../../../../assets/sample_output.png`},

{ title: 'Nodes Centrality' , description: `<p>The Shortest Path algorithm calculates the shortest (weighted)
 path between a pair of nodes. In this category, Dijkstra’s algorithm is the most well known.</p>
 <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>` ,
 imageUrl: `../../../../../assets/sample_output.png`}];
  constructor() {
    this.algoList.next(this.listOfAlgo);
  }
}
