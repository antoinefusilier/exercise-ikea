import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibAuthModule } from 'lib-auth';
import { AppComponent } from './app.component';
// import { AuthGuard } from './auth.guard';
import { ServerComponent } from './server/server.component';
// https://angular.io/api/router/Route
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'auth',
    loadChildren: () => import('lib-auth').then(m => m.LibAuthModule),
    outlet: 'sahirato-auth'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule)
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule)
  },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
