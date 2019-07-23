import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  // { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: MainComponent, data: { title: "dashboard" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
