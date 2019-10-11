import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { MainComponent } from './components/main/main.component';
import { StatisticSidebarComponent } from './components/statistic-sidebar/statistic-sidebar.component';
import { AlgoListComponent } from './components/algo-list/algo-list.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';

@NgModule({
  declarations: [MainComponent, StatisticSidebarComponent, AlgoListComponent, DetailsPageComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  exports: [MainComponent]
})
export class StatisticsModule { }
