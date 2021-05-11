import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { PlayComponent } from './components/play/play.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [AdminComponent, NavComponent, MainComponent, PlayComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, FormsModule],
})
export class AdminModule {}
