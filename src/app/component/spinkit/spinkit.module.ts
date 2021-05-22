import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinkitComponent } from './spinkit.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpinkitComponent],
  exports: [SpinkitComponent],
})
export class SpinkitModule {}
