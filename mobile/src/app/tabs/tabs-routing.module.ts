import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ordens-servicos',
        loadChildren: () => import('../ordens-servicos/ordens-servicos-routing.module').then(m => m.OrdensServicosPageRoutingModule),
        pathMatch: 'full'
      },
      {
        path: 'ordens-servicos/:numero_ordem',
        loadChildren: () => import('../ordens-servicos-detalhes/ordens-servicos-detalhes.module').then(m => m.OrdensServicosDetalhesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/ordens-servicos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/ordens-servicos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
