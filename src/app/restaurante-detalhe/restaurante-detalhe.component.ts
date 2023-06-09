import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';

import { RestauranteService } from 'app/restaurantes/restaurantes.service';

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante

  constructor(private restauranteService: RestauranteService, private rouute: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.restaurantesById(this.rouute.snapshot.params['id'])
    .subscribe(restaurante => this.restaurante = restaurante)
  }

}
