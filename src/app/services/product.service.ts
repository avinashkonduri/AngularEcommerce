import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://angularspringbootmysql-env.eba-cjni4rqh.us-east-2.elasticbeanstalk.com/api/products';

  private categoryUrl = 'http://angularspringbootmysql-env.eba-cjni4rqh.us-east-2.elasticbeanstalk.com/api/product-category';
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map((response: { _embedded: { products: any; }; }) => response._embedded.products)
    )
  }

  getProduct(theProductId: number): Observable<Product> {

    //need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  getProductListById(theCategoryId: number): Observable<Product[]> {

    // need to build URL based on category id
    const categoryUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(this.categoryUrl).pipe(
      map((response: { _embedded: { products: any; }; }) => response._embedded.products))
  }
  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    )
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}


interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
