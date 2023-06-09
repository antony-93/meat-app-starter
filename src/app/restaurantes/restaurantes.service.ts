import {Injectable} from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

import { Restaurante } from "./restaurante/restaurante.model";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from 'app/app.errorr-handler';

@Injectable()
export class RestauranteService{   

    constructor(private http: Http){}

    restaurantes(): Observable<Restaurante[]> {
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }

    restaurantesById(id: string): Observable<Restaurante>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }
}