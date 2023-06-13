import {Injectable} from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

import { Restaurante } from "./restaurante/restaurante.model";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from 'app/app.errorr-handler';
import { MenuItem } from 'app/restaurante-detalhe/menu-item/menu-item.model';

@Injectable()
export class RestauranteService{   

    constructor(private http: Http){}

    restaurantes(search?: string): Observable<Restaurante[]> {
      return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }

    restaurantesById(id: string): Observable<Restaurante>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurante(id: string): Observable<any>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }

}