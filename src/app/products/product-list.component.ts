import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { NgModel } from '@angular/forms';
import { FilterComponent } from '../shared/filter/filter.component';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild(FilterComponent) filterComponent: FilterComponent;
  parentListFilter: string;

  pageTitle: string = 'Product List';
  filterName: string;
  showImage: boolean;
  includeDetail = true;
  filteredProductsCount: number;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }

  onValueChange(value: string): void {
    this.performFilter(value);
    this.parentListFilter = value;
    console.log('Filter:' + value);
  }

  ngAfterViewInit(): void {
    // this.parentListFilter = this.filterComponent.listFilter;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
        this.performFilter(this.parentListFilter);
      },
      (error: any) => this.errorMessage = <any>error
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredProducts = this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
        this.filteredProductsCount = this.filteredProducts.length;
    } else {
      this.filteredProducts = this.products;
      this.filteredProductsCount = this.products.length;
    }

  }
}
