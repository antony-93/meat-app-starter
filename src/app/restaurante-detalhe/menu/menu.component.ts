import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = []

  constructor(private restauranteService: RestauranteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMenu(this.route.parent.snapshot.params['id'])
    console.log(this.menu)
  }

  private getMenu(id){
    this.menu = this.restauranteService.menuOfRestaurants(id)  
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }
}
