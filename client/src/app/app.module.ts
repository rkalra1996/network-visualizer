import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './modules/shell/component/header/header.component';
import { ShellModule } from './modules/shell/shell.module';
import { SharedModule } from './modules/shared/shared.module';
import { SuiModule } from 'ng2-semantic-ui';
import { CoreModule } from './modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './modules/custom-material/components/snackbar/snackbar/snackbar.component';

// import redux for state management
import {ReduxModule} from './modules/redux/redux.module';
import { DashboardModule } from './modules/dashboard-v2/dashboard-v2.module';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReduxModule,
    SuiModule,
    ShellModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
