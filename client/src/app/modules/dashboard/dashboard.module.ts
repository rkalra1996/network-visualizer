import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './components/main/main.component';
import { GraphVisualizerComponent } from './components/graph-visualizer/graph-visualizer.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

import {SuiSelectModule, SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [MainComponent, GraphVisualizerComponent, DashboardSidebarComponent, DashboardHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    SuiSelectModule, SuiModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
