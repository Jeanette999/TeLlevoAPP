import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramarviPageRoutingModule } from './programarvi-routing.module';

import { ProgramarviPage } from './programarvi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramarviPageRoutingModule
  ],
  declarations: [ProgramarviPage]
})
export class ProgramarviPageModule {}
