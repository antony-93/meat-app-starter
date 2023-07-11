import { Component, OnInit } from '@angular/core';
import { Order } from 'app/order/order.model';
import { ShoppingService } from 'app/shopping/shopping.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'mt-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {

  order: Order
  alive = true;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.doOrder()
  }
  
  ngOnDestroy() {
    this.alive = false
  }

  doOrder(){
    this.shoppingService.getOrder()
      .pipe(takeWhile(() => this.alive)) // Aguarda até que o valor do pedido não seja null
      .subscribe(order => {
        this.order = order;
        console.log('Pedido:', order);
      });
  }

}
