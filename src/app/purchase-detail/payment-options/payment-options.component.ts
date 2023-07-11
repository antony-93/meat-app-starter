import { Component, OnInit } from '@angular/core';
import { Order } from 'app/order/order.model';
import { ShoppingService } from 'app/shopping/shopping.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'mt-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {

  order: Order
  alive = true;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.doOrder()
  }

  ngOnDestroy() {
    this.alive = false
  }

  doOrder() {
    this.shoppingService.getOrder()
      .pipe(takeWhile(() => this.alive)) // Aguarda até que o valor do pedido não seja null
      .subscribe(order => {
        this.order = order;
        console.log('Pedido:', order);
      });
  }

  paymentOptions() {
    switch (this.order.paymentOption) {
      case 'Mon':
        break

      case 'DEB':
        break

      case 'REF':
        break
    }
  }
}
