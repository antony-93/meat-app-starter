import {Component, OnInit} from "@angular/core"
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!'
  profilePath: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.updateContentAlignment()
    this.isProfileRoute()
  }

  isProfileRoute(){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.profilePath = event.url.includes('profile');
    });
  }  

  updateContentAlignment() {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (this.profilePath) {
      contentWrapper.classList.add('centered');
    } else {
      contentWrapper.classList.remove('centered');
    }
  }  

}
