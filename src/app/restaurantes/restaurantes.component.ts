import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
import { RestauranteService } from './restaurantes.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[]

  searchBarState = 'hidden'

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantesService: RestauranteService, private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
  .pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(searchTerm =>
      this.restaurantesService
        .restaurantes(searchTerm)
        .pipe(catchError(erro => from([]))))
  )
  .subscribe(restaurantes => (this.restaurantes = restaurantes));


    this.restaurantesService.restaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes)
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'

  }

}
