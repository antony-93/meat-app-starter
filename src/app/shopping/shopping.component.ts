import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('chamado com sucesso')
  }

}
