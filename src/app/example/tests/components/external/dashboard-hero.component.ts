import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from './hero.model';

@Component({
  selector:  'dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: [ './dashboard-hero.component.css' ]
})
export class DashboardHeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();
  
  click() { 
      this.selected.emit(this.hero); 
  }
}
