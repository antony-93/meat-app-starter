import { MenuItem } from "app/restaurante-detalhe/menu-item/menu-item.model";

class Order {
    constructor(
        public user: string,
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[],
        public total: string,
        public _id: string,
        public date: Date
        ){}
}

class OrderItem {
    constructor(public quantity: number, public menu: MenuItem){}
}

export {Order, OrderItem}