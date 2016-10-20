import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser'; 

@Component({
    selector: 'my-index',
    templateUrl: './index.component.html',
    styles: [`
        main {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            color: #fff;
            text-align: center;
            background: #286090;
            overflow: auto;
        }
    `]
})
export class IndexComponent implements OnInit {
    
    constructor(private titleService: Title ){ }

    ngOnInit() { }

    //设置title
    setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}