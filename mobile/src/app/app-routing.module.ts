import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ordens-servicos',
    loadChildren: () => import('./ordens-servicos/ordens-servicos.module').then( m => m.OrdensServicosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ordens-servicos-detalhes',
    loadChildren: () => import('./ordens-servicos-detalhes/ordens-servicos-detalhes.module').then( m => m.OrdensServicosDetalhesPageModule),
    canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
