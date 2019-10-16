import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';

const routes: Routes = [
  {
    path : 'home',
    component: MainComponent,
    children: [
      {
        path : '',
        component: DetailsPageComponent,
        outlet : 'Details'
      },
      {
        path : '/:id',
        component: DetailsPageComponent,
        outlet : 'Details'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
