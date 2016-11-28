import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../external/hero.service';
import { Hero } from '../external/hero.model';

@Component({
    selector: 'dashboard',
    template: `<dashboard-hero *ngFor="let hero of heroes"  [hero]="hero"  (selected)="gotoDetail($event)"></dashboard-hero>`
})
 
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [new Hero(42, 'Test Name')];
    constructor( private router: Router, private heroService: HeroService ) { }

    ngOnInit() { }

    gotoDetail(hero: Hero) {
        let url = `/heroes/${hero.id}`;
        this.router.navigateByUrl(url);
    }

}
