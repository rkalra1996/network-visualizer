import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DashboardV2RoutingModule } from './dashboard-v2-routing.module';
import { MainComponent } from './components/main-v2/main.component';
import { GraphVisualizerComponent } from './components/graph-v2-visualizer/graph-visualizer.component';
import { DashboardSidebarComponent } from './components/dashboard-v2-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-v2-header/dashboard-header.component';

import {SuiSelectModule, SuiModule} from 'ng2-semantic-ui';
import { SharedModule } from '../shared/shared.module';
import {AlgoRunnerModule} from './../algo-runner/algo-runner.module';
import { ColorPanelComponent } from './components/color-panel/color-panel/color-panel.component';
import { CreateNodesComponent } from './components/create-nodes/create-nodes.component';
import { GraphExporterComponent } from './components/graph-exporter/graph-exporter.component';

import { ReactiveFormsModule } from '@angular/forms';

// Material design components from custom Material module
import {CustomMaterialModule} from './../custom-material/custom-material/custom-material.module';
import { MaterialService } from '../custom-material/services/material-core/material.service';
@NgModule({
  declarations: [MainComponent, GraphVisualizerComponent, DashboardSidebarComponent, DashboardHeaderComponent,
    ColorPanelComponent, CreateNodesComponent, GraphExporterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuiSelectModule, SuiModule,
    SharedModule,
    CustomMaterialModule,
    DashboardV2RoutingModule,
    AlgoRunnerModule
  ],
  exports: [
    MainComponent, DashboardHeaderComponent,
    DashboardSidebarComponent, ColorPanelComponent,
    GraphExporterComponent, GraphVisualizerComponent,
    CreateNodesComponent,DashboardHeaderComponent],
  providers : [MaterialService]
})
export class DashboardModule { }
