import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SuiSelectModule, SuiModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

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
    ReactiveFormsModule,
    CoreModule
  ],
  exports:[
      SidebarComponent
    ]
})
export class SharedModule { }
