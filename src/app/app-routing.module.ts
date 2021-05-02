import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './_modules/auth/login';
import { DashboardComponent } from './_modules/dashboard';

const authModule = () =>
  import('./_modules/auth/auth.module').then((m) => m.AuthdModule);

const dashboardModule = () =>
  import('./_modules/dashboard/dashboard.module').then(
    (m) => m.DashboardModule
  );

const userModule = () =>
  import('./_modules/users/user.module').then((m) => m.UsersdModule);

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'auth', loadChildren: authModule },
  { path: 'dashboard', loadChildren: dashboardModule },
  { path: 'users', loadChildren: userModule },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
