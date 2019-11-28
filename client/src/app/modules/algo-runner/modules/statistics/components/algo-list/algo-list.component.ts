import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StatisticalAnalysisResultService } from '../../services/statistical-analysis-result/statistical-analysis-result.service';

@Component({
  selector: 'app-algo-list',
  templateUrl: './algo-list.component.html',
  styleUrls: ['./algo-list.component.scss']
})
export class AlgoListComponent implements OnInit {
@Input() data: any;
@Input() firstVisit: boolean;
@Output() clicked = new EventEmitter();
  selectedIndex: any;
  constructor(public statisticalAnalysisResult: StatisticalAnalysisResultService) { }

  ngOnInit() {
    console.log('List of algos', this.data);
  }

  // Emitting the name of algo selected
  emitData(data, index) {
    this.statisticalAnalysisResult.renderAnalysisResult(false);
    this.firstVisit = false;
    this.selectedIndex = index;
    this.clicked.emit(data);
  }
}
