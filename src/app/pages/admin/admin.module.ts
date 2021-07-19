import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/content/main/main.component';
import { PlayComponent } from './components/play/play.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { ListSongComponent } from './components/content/main/list-song/list-song.component';
import { SongItemComponent } from './components/content/main/list-song/song-item/song-item.component';
import { ListTopArtisComponent } from './components/content/main/list-top-artis/list-top-artis.component';
import { ItemArtisComponent } from './components/content/main/list-top-artis/item-artis/item-artis.component';
import { PlayListComponent } from './components/content/main/play-list/play-list.component';
import { PlayListItemComponent } from './components/content/main/play-list/play-list-item/play-list-item.component';
import { SpinkitModule } from '../../component/spinkit/spinkit.module';
import { HomeComponent } from './components/content/home/home.component';
import { HeadSearchAndUserComponent } from './components/head-search-and-user/head-search-and-user.component';
import { ListForListSongComponent } from './components/content/artists/list-for-list-song.component';
import { PlaylistComponent } from './components/content/playlist/playlist.component';
import { ChartMusicComponent } from './components/content/chart-music/chart-music.component';
import { AdminSongsComponent } from './components/content/admin-songs/admin-songs.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    MainComponent,
    PlayComponent,
    ListSongComponent,
    SongItemComponent,
    ListTopArtisComponent,
    ItemArtisComponent,
    PlayListComponent,
    PlayListItemComponent,
    HomeComponent,
    HeadSearchAndUserComponent,
    ListForListSongComponent,
    PlaylistComponent,
    ChartMusicComponent,
    AdminSongsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    SpinkitModule,
  ],
})
export class AdminModule {}
