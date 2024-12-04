import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdensServicosDetalhesPageRoutingModule } from './ordens-servicos-detalhes-routing.module';

import { OrdensServicosDetalhesPage } from './ordens-servicos-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdensServicosDetalhesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OrdensServicosDetalhesPage]
})
export class OrdensServicosDetalhesPageModule {}
