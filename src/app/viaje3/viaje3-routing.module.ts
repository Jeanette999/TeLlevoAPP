import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Viaje3Page } from './viaje3.page';

const routes: Routes = [
  {
    path: '',
    component: Viaje3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Viaje3PageRoutingModule {}
