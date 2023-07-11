import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { MEAT_API } from "app/app.api";
import { Order } from 'app/order/order.model';

@Injectable()
export class ShoppingService {
  private orderSubject: BehaviorSubject<Order> = new BehaviorSubject<Order>(null);
  
  constructor(private http: HttpClient) { }

  ordersByEmail(email: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${MEAT_API}/orders?email=${email}`)
  }

  ordersById(id: string): Observable<Order> {
    return this.http.get<Order>(`${MEAT_API}/orders/${id}`)
  }

  setOrder(order: Order) {
    this.orderSubject.next(order);
  }

  getOrder() {
    return this.orderSubject.asObservable();
  }

}