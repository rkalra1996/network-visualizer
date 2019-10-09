import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CostingModalComponent} from './components/costing-modal/costing-modal.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'costing',
    component: CostingModalComponent
  },
  {
    path: 'statistics',
    loadChildren: './modules/statistics/statistics.module#StatisticsModule'
  },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgoRunnerRoutingModule { }
