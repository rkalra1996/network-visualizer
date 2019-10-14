import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { MainComponent } from './components/main/main.component';
import { StatisticSidebarComponent } from './components/statistic-sidebar/statistic-sidebar.component';
import { AlgoListComponent } from './components/algo-list/algo-list.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { StatisticalToolbarComponent } from './components/statistical-toolbar/statistical-toolbar.component';
import { StatisticalContentComponent } from './components/statistical-content/statistical-content.component';
import { StatisticalFormComponent } from './components/statistical-form/statistical-form.component';
import { AlgoRunnerModule } from '../../algo-runner.module';
import { RouteButtonComponent } from './components/route-button/route-button.component';

@NgModule({
  declarations: [MainComponent, StatisticSidebarComponent, AlgoListComponent, DetailsPageComponent, StatisticalToolbarComponent, 
    StatisticalContentComponent, StatisticalFormComponent, RouteButtonComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    AlgoRunnerModule
  ],
  exports: [MainComponent]
})
export class StatisticsModule { }
