import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgoRunnerRoutingModule } from './algo-runner-routing.module';
import { MainComponent } from './components/main/main.component';
import { CostingModalComponent } from './components/costing-modal/costing-modal.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarSharedService } from './services/toolbar-shared-service/toolbar-shared.service';
import { SuiSelectModule, SuiModule } from 'ng2-semantic-ui/dist';
import { FormsModule } from '@angular/forms';

import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalRowRendererComponent } from './components/modal-row-renderer/modal-row-renderer.component';

@NgModule({
  declarations: [MainComponent, CostingModalComponent, ToolbarComponent, ModalRowRendererComponent],
  imports: [
    CommonModule,
    FormsModule,
    SuiModule,
    NgbTypeaheadModule,
    SuiSelectModule,
    AlgoRunnerRoutingModule
  ],
  exports: [ToolbarComponent],
  providers: [ToolbarSharedService]
})
export class AlgoRunnerModule { }
