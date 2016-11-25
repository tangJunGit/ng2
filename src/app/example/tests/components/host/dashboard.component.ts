import { Component } from '@angular/core';

import { Hero } from '../external/hero.model';

@Component({
  template: `<dashboard-hero  [hero]="hero"  (selected)="onSelected($event)"></dashboard-hero>`
})

export class TestHostComponent {
    hero = new Hero(42, 'Test Name');
    selectedHero: Hero;

    onSelected(hero: Hero) { 
        this.selectedHero = hero; 
    }
}
