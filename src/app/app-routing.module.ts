import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/admin/components/main/main.component';
import { AdminModule } from './pages/admin/admin.module';

import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/admin/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'asdasd',
        loadChildren: './pages/admin/admin.module#AdminModule',
      },
    ],
  },

  {
    path: 'Spinkit',
    loadChildren: () =>
      import('./component/spinkit/spinkit.module').then((m) => m.SpinkitModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
