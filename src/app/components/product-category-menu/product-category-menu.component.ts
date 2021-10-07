import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ak-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.scss']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategory!: ProductCategory[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productCategoryList();
  }

  productCategoryList(){
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Category ='+JSON.stringify(data));
        this.productCategory = data;
      }
    )
  }
}
