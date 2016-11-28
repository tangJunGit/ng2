import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';

import { Hero } from '../external/hero.model';

@Component({
    selector: 'hero-detail',
    template: `
            <div *ngIf="hero">
                <h2><span>{{hero.name}}</span> Details</h2>
                <div>
                    <label>id: </label>{{hero.id}}</div>
                <div>
                    <label for="name">name: </label>
                    <input id="name" [(ngModel)]="hero.name" placeholder="name" />
                </div>
                <button (click)="save()">Save</button>
                <button (click)="cancel()">Cancel</button>
            </div>

        `,
    providers:  [ HeroService ]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private route:  ActivatedRoute, private heroService: HeroService) {}

    ngOnInit(): void {
        // this.route.params.pluck('id')
        //     .forEach((id: any) => this.getHero(+id))
        //     .catch(() => this.hero = new Hero(0, 'name')); //没有id，就创建
    }

    getHero(id: number){
        this.hero.id = id;
    }


}