import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MaterialService } from '../services/material-core/material.service';
import { ConfigService } from '../services/config/config.service';

@NgModule({
  declarations: [],
  providers : [MaterialService, ConfigService],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [
    MatButtonModule,  
    MatCheckboxModule,
    MatSnackBarModule
  ]
})
export class CustomMaterialModule { }
