import { Component, OnInit } from '@angular/core';
import { Order } from 'app/order/order.model';
import { ShoppingService } from '../shopping.service';
import { LoginService } from 'app/security/login/login.service';
import { User } from 'app/security/login/user.model';

@Component({
  selector: 'mt-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {

  orders: Order[]

  constructor(private shoppingService: ShoppingService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.doLoadOrders(this.user().email)
  }

  user(): User {
    return this.loginService.user
  }

  total(quantity, value){
    return quantity * value
  }

  doLoadOrders(email: string) {
    console.log('== doLoadOrders ==', email)
    if (email) this.doGetOrders(email)
  }

  private doGetOrders(email: string) {
    console.log('== doLoadOrders ==', email)
    this.shoppingService.ordersByEmail(email).subscribe(ord => {
      console.log('== doLoadOrders == ord==', ord) 
      this.orders = ord;
    }, ordError => {
      console.log('== doLoadOrders == ordError==', ordError) 
    }, () => {      
      console.log('== doLoadOrders == orders==', this.orders)     
    })
  }
  
}
