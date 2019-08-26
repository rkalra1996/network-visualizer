import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SuiSelectModule, SuiModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { GlobalLoaderComponent } from './component/global-loader/global-loader/global-loader.component';
import { ToggleSwitchComponent } from './component/toggle-switch/toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [
    SidebarComponent,
    GlobalLoaderComponent,
    ToggleSwitchComponent
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
      SidebarComponent,
      GlobalLoaderComponent,
      ToggleSwitchComponent
    ]
})
export class SharedModule { }
