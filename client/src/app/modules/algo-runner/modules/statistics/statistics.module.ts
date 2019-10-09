import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  exports: [MainComponent]
})
export class StatisticsModule { }
