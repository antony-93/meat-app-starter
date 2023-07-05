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
    this.doMenu(this.route.parent.snapshot.params['id'])
    console.log(this.menu)
  }

  doMenu(id){
    if(id){
      this.doGetMenu(id)
    }else{
      console.log('== doMenu Id ==', id)
    }
  }

  private doGetMenu(restaurantId: string) {
    console.log('== doGetMenu ==', restaurantId)
    this.restauranteService.menuOfRestaurants(restaurantId).subscribe(menu => {
      console.log('== doGetMenu menu==', menu) 
      this.menu = menu;
    }, menuError => {
      console.log('== doGetMenu menuError==', menuError) 
    }, () => {      
      console.log('== doGetMenu menu==', this.menu)      
    })
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }
}
