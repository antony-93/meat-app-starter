import { ModuleWithProviders, NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestauranteService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";
import { LoginService } from "app/security/login/login.service";
import { LoggedInGuard } from "app/security/loggedin.guard";
import { LeaveOrderGuard } from "app/order/leave-order.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "app/security/auth.interceptor";
import { DeliveryCostComponent } from "app/order/delivery-cost/delivery-cost.component";
import { ShoppingCartService } from "app/restaurante-detalhe/shopping-cart/shopping-cart.service";
import { ShoppingService } from "app/profile/shopping/shopping.service";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent,
        RatingComponent, CommonModule,
        FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService,
                ShoppingService,
                LoginService,
                RestauranteService,
                OrderService,
                NotificationService,
                LoggedInGuard,
                LeaveOrderGuard,
                DeliveryCostComponent,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
        }
    }
}