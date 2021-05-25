import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { PlayComponent } from './components/play/play.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { ListSongComponent } from './components/main/list-song/list-song.component';
import { SongItemComponent } from './components/main/list-song/song-item/song-item.component';
import { ListTopArtisComponent } from './components/main/list-top-artis/list-top-artis.component';
import { ItemArtisComponent } from './components/main/list-top-artis/item-artis/item-artis.component';
import { PlayListComponent } from './components/main/play-list/play-list.component';
import { PlayListItemComponent } from './components/main/play-list/play-list-item/play-list-item.component';
import { SpinkitModule } from '../../component/spinkit/spinkit.module';
import { HomeComponent } from './components/home/home.component';

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
