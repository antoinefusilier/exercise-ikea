import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ServerComponent } from './server/server.component';

export const routes: Routes = [
  {
    path: '',
    // component: AppComponent,

    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'server',
    component: ServerComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule)
  }, {
    path: 'admin',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule)
  }, {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
