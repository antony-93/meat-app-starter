import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { ApplicationErrorHandler } from './app.errorr-handler';
import locatePt from '@angular/common/locales/pt';
import { ShoppingComponent } from './profile/shopping/shopping.component';
import { ShoppingDetailComponent } from './profile/shopping/shopping-detail/shopping-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { MenuItemComponent } from './restaurante-detalhe/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurante-detalhe/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurante-detalhe/reviews/reviews.component';
import { PurchaseDetailComponent } from './profile/purchase-detail/purchase-detail.component';
import { PedidosComponent } from './profile/purchase-detail/pedidos/pedidos.component';
import { ProfileOverviewComponent } from './profile/profile-overview/profile-overview.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { PaymentOptionsComponent } from './profile/payment-options/payment-options.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

registerLocaleData(locatePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
    ShoppingComponent,
    ShoppingDetailComponent,
    PurchaseDetailComponent,
    PedidosComponent,
    ProfileComponent,
    ProfileOverviewComponent,
    ChangePasswordComponent,
    PaymentOptionsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    SharedModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: LOCALE_ID, useValue: 'pt-BR' },
  { provide: ErrorHandler, useClass: ApplicationErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
