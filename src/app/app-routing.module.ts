import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/admin/components/content/main/main.component';
import { AdminModule } from './pages/admin/admin.module';

import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/admin/components/content/home/home.component';
import { ListForListSongComponent } from './pages/admin/components/content/artists/list-for-list-song.component';
import { PlaylistComponent } from './pages/admin/components/content/playlist/playlist.component';
import { ChartMusicComponent } from './pages/admin/components/content/chart-music/chart-music.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'songs', component: MainComponent },
      { path: 'home', component: HomeComponent },
      { path: 'artists', component: ListForListSongComponent },
      { path: 'playlists', component: PlaylistComponent },
      { path: 'chart', component: ChartMusicComponent },
      {
        path: 'asdasdz31z',
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
