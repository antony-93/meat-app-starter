import {Injectable} from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurante } from "./restaurante/restaurante.model";
import { MEAT_API } from "app/app.api";
import { MenuItem } from 'app/restaurante-detalhe/menu-item/menu-item.model';

@Injectable()
export class RestauranteService{   

    constructor(private http: HttpClient){}

    restaurantes(search?: string): Observable<Restaurante[]> {
      let params: HttpParams = undefined
      if(search){
        params = new HttpParams().set('q', search)
      }
      return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`, {params: params})
    }

    restaurantesById(id: string): Observable<Restaurante>{
      return this.http.get<Restaurante>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurante(id: string): Observable<any>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]>{
      return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }

}