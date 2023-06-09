import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurante-detalhe/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurante-detalhe/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Order } from "./order.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MEAT_API } from "app/app.api";


@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, 
                private http: HttpClient) {}

    itemsValue(): number {
        return this.cartService.total()
    }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    clear() {
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string> {
        console.log(order)
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
        .pipe(map(order => order._id))
    }
}