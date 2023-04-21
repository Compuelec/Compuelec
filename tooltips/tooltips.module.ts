import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipsComponent } from './tooltips.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TooltipsComponent],
  exports: [
    TooltipsComponent,
  ],
})
export class TooltipsModule { }
