import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    constructor( private router: Router, private heroService: HeroService ) { }

    ngOnInit() { }

    gotoDetail(hero: Hero) {
        let url = `/heroes/${hero.id}`;
        this.router.navigateByUrl(url);
    }

}