import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { OrdensServicosPageRoutingModule } from './ordens-servicos-routing.module';

import { OrdensServicosPage } from './ordens-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdensServicosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OrdensServicosPage]
})
export class OrdensServicosPageModule {}
