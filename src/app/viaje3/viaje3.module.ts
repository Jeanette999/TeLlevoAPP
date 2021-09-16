import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Viaje3PageRoutingModule } from './viaje3-routing.module';

import { Viaje3Page } from './viaje3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Viaje3PageRoutingModule
  ],
  declarations: [Viaje3Page]
})
export class Viaje3PageModule {}
