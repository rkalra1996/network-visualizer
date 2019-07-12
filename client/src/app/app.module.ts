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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    ShellModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
