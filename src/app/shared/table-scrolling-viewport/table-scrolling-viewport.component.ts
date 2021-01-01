import { ListRange } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'table-scrolling-viewport',
  templateUrl: './table-scrolling-viewport.component.html',
  styleUrls: ['./table-scrolling-viewport.component.css']
})
export class TableScrollingViewportComponent implements OnInit, OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemSize: number = 0;
  @Output() itemsRangeChange = new EventEmitter<ListRange>();

  @ViewChild(CdkVirtualScrollViewport, { static: true })
  cdkViewport: CdkVirtualScrollViewport;

  virtualItems: undefined[] = [];

  constructor() { }

  ngOnInit() {
    this.cdkViewport.renderedRangeStream.subscribe((range: ListRange) => {
      this.itemsRangeChange.emit(range);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalItems']) {
      this.virtualItems = Array.from({ length: this.totalItems });
      this.cdkViewport.checkViewportSize();
    }
  }

}
