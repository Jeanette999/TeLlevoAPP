import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramarviPage } from './programarvi.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramarviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramarviPageRoutingModule {}
