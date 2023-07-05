import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MEAT_API } from "app/app.api";
import { Order } from 'app/order/order.model';

@Injectable()
export class ShoppingService {

  constructor(private http: HttpClient) { }

  ordersById(email: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${MEAT_API}/orders?email=${email}`)
  }

}