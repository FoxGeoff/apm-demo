import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('filterElement') filterElementRef: { nativeElement: { focus: () => void; }; };
  @Input() displayDetail: boolean;
  @Input() productCount: number;
  listFilter: string = 'cart';
  hitMessage: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productCount'] && !changes['productCount'].currentValue) {
      this.hitMessage = 'No matches found';
    } else {
      this.hitMessage = 'Hits: ' + this.productCount;
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.filterElementRef.nativeElement) {
      this.filterElementRef.nativeElement.focus();
    }
  }
}
