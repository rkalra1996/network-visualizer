import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./components/main-v2/main.component";

const routes: Routes = [
  { path: "", component: MainComponent, data: { title: "dashboard" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardV2RoutingModule {}
