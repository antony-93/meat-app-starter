import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms 0s ease-in')
      ])
    ])]
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  menuItemState = 'ready'

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

  constructor() { }

  ngOnInit() {
  }

}
