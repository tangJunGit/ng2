import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-index',
    template: `
        <main [ngClass]="theme">
            <a class="btn btn-primary btn-lg" (click)="updateTheme('theme-blue')">蓝色主题</a>
            <a class="btn btn-success btn-lg" (click)="updateTheme('theme-green')">绿色主题</a>
            <a class="btn btn-danger btn-lg" (click)="updateTheme('theme-red')">红色主题</a>
            <my-theme [ngClass]="theme"></my-theme>
        </main>
    `,
    styleUrls: ['./host.css'],
    // styleUrls: ['./host.scss']   // aot 没编译过
})
export class IndexComponent implements OnInit {
    theme: string = 'theme-blue';
    
    constructor(){ }

    ngOnInit() { }

    updateTheme(theme: string){
        this.theme = theme;
    }
}