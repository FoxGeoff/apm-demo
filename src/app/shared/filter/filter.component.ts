import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'pm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit {
  @ViewChild('filterElement') filterElementRef: { nativeElement: { focus: () => void; }; };
  @Input() displayDetail: boolean;
  @Input() productCount: number;
  listFilter: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.filterElementRef.nativeElement) {
      this.filterElementRef.nativeElement.focus();
    }
  }
}
