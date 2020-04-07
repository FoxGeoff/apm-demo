import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('filterElement') filterElementRef: { nativeElement: { focus: () => void; }; };
  @Input() displayDetail: boolean;
  @Input() productCount: number;
  hitMessage: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _listFilter: string;
  public get listFilter(): string {
    return  this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }


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
