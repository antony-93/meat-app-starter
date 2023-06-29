import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restauranteService: RestauranteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.doLoadReviews(this.route.parent.snapshot.params['id'])
  }


  
  doLoadReviews(restaurantId: string) {
    console.log('== doLoadReviews ==', restaurantId)
    if (restaurantId) this.doGetReviews(restaurantId)
  }

  private doGetReviews(restaurantId: string) {
    console.log('== doGetReviews ==', restaurantId)
    this.restauranteService.reviewsOfRestaurante(restaurantId).subscribe(res => {
      console.log('== doGetReviews res==', res) 
      this.reviews = res;
    }, resError => {
      console.log('== doGetReviews resError==', resError) 
    }, () => {      
      console.log('== doGetReviews reviews==', this.reviews)      
    })
  }

}
