import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { GraphVisualizerComponent } from './components/graph-visualizer/graph-visualizer.component';

// interceptors
import { CoreService } from './services/interceptors/core-interceptor/core.service';
@NgModule({
  declarations: [GraphVisualizerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers : [
    {provide : HTTP_INTERCEPTORS, useClass : CoreService, multi: true}
  ],
  exports:[GraphVisualizerComponent]
})
export class CoreModule { }
