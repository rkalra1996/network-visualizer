import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'algorithm',
    loadChildren: './modules/algo-runner/algo-runner.module#AlgoRunnerModule'
  },
  {
    path: '',
    loadChildren: './modules/dashboard-v2/dashboard-v2.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
