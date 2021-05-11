import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PlayComponent } from './components/play/play.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [HomeComponent, PlayComponent, NavMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,

  ]
})
export class HomeModule { }
