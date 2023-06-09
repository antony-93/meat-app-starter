import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
import { RestauranteService } from './restaurantes.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[]

  constructor(private restaurantesService: RestauranteService) { }

  ngOnInit() {
    this.restaurantesService.restaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes)
  }

}
