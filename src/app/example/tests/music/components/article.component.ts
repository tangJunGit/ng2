import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'article',
    template: `
        
    `
})
export class ArticlesComponent implements OnInit {
    id: string;
    
    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => { this.id = params['id']; });
    }

    ngOnInit() { }
}