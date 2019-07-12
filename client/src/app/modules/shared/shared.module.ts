import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SuiSelectModule, SuiModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SuiSelectModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
      SidebarComponent
    ]
})
export class SharedModule { }
