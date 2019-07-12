import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { GraphVisualizerComponent } from './components/graph-visualizer/graph-visualizer.component';

@NgModule({
  declarations: [GraphVisualizerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  exports:[GraphVisualizerComponent]
})
export class CoreModule { }
