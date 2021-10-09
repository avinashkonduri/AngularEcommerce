import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ak-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
