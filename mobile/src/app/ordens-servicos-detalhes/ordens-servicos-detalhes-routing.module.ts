import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdensServicosDetalhesPage } from './ordens-servicos-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: OrdensServicosDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdensServicosDetalhesPageRoutingModule {}
