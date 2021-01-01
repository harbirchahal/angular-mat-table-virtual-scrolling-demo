import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { TableScrollingViewportComponent } from './table-scrolling-viewport.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
  ],
  declarations: [
    TableScrollingViewportComponent,
  ],
  exports: [
    TableScrollingViewportComponent,
  ],
})
export class TableScrollingViewportModule { }
