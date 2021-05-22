import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinkitComponent } from './spinkit.component';

const routes: Routes = [{ path: '', component: SpinkitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinkitRoutingModule { }
