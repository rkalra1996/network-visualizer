import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { GraphVisualizerComponent } from './components/graph-visualizer/graph-visualizer.component';

@NgModule({
  declarations: [GraphVisualizerComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[GraphVisualizerComponent]
})
export class CoreModule { }
