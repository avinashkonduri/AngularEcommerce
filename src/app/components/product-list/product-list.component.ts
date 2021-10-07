import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ak-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  currentCategoryId: number = 1;
  products!: Product[];
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
     // check if 'id' paramter is available
     const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

     if(hasCategoryId) {
      //  get the 'id' param string. Convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
     }
     else {
      //  not category Id available.. default to category id 1
      this.currentCategoryId = 1;
     }
     this.productService.getProductListById(this.currentCategoryId).subscribe(data => {
      console.log(data);
      this.products = data;
     })
    // this.productService.getProductList().subscribe(data => {
    //   console.log(data);
    //   this.products = data;
    // })
  }

  // handleProductList(){

  // }
}
