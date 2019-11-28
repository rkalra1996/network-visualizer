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
import { PriorityCardComponent } from './components/priority-card/priority-card.component';
import { SuiModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { AnalysisResultComponent } from './components/analysis-result/analysis-result.component';
import { InitialGraphComponent } from './components/initial-graph/initial-graph.component';
import { ResultVisualizerComponent } from './components/result-visualizer/result-visualizer.component';
import { GenericDropdownComponent } from './components/generic-dropdown/generic-dropdown.component';

@NgModule({
  declarations: [MainComponent, StatisticSidebarComponent, AlgoListComponent, DetailsPageComponent, StatisticalToolbarComponent,
    StatisticalContentComponent, StatisticalFormComponent, RouteButtonComponent,
    PriorityCardComponent, GenericFormComponent, AnalysisResultComponent,
    InitialGraphComponent, ResultVisualizerComponent, GenericDropdownComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SuiModule,
    AlgoRunnerModule
  ],
  exports: [MainComponent]
})
export class StatisticsModule { }
