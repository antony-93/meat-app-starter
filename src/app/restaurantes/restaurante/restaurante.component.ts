import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from './restaurante.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  animations:[
    trigger('restauranteAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestauranteComponent implements OnInit {

  restauranteState = 'ready'  

  @Input() restaurante: Restaurante

  constructor() { }

  ngOnInit() {
  }

}

