import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostComponent } from "./delivery-cost/delivery-cost.component";
import { SharedModule } from "app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { LeaveOrderGuard } from "./leave-order.guard";

const ROUTES: Routes = [
    {path:'', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule{

}