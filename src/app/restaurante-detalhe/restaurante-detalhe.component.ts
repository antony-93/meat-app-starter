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
    console.log('aqui')
    this.doRestaurantes(this.rouute.snapshot.params['id'])
  }

  private doRestaurantes(id){
    this.restauranteService.restaurantesById(id)
    .subscribe(restaurante => {
      console.log('restaurante ==' + restaurante)
      this.restaurante = restaurante
      console.log('this.restaurante ==' + this.restaurante)
    })
  }

}
