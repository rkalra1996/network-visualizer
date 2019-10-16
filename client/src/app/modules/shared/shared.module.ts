import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SuiSelectModule, SuiModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { GlobalLoaderComponent } from './component/global-loader/global-loader/global-loader.component';
import { ToggleSwitchComponent } from './component/toggle-switch/toggle-switch/toggle-switch.component';
import { ColorPickerComponent } from './component/color-picker/color-picker.component';

import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
  declarations: [
    SidebarComponent,
    GlobalLoaderComponent,
    ToggleSwitchComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SuiSelectModule,
    ColorPickerModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports:[
      SidebarComponent,
      GlobalLoaderComponent,
      ToggleSwitchComponent,
      ColorPickerComponent
    ]
})
export class SharedModule { }
