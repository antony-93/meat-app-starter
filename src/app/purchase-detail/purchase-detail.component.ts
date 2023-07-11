import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'app/order/order.model';
import { ShoppingService } from 'app/shopping/shopping.service';

@Component({
  selector: 'mt-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {

  order: Order

  constructor(private shoppingService: ShoppingService, private rouute: ActivatedRoute) { }

  ngOnInit() {
    this.doOrders(this.rouute.snapshot.params['id'])
  }

  doOrders(id){
    this.shoppingService.ordersById(id)
    .subscribe(order => {
      this.order = order
      this.shoppingService.setOrder(order)
    })
  }

}
