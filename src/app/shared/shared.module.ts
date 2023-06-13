import { ModuleWithProviders, NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoppingCartService } from "app/restaurante-detalhe/shopping-cart/shopping-cart.service";
import { RestauranteService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent,
        RatingComponent, CommonModule,
        FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestauranteService, OrderService, NotificationService]
        }
    }
}