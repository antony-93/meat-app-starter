import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
