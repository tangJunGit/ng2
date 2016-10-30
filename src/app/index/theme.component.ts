import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser'; 

@Component({
    selector: 'my-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./child.css']
})
export class ThemeComponent implements OnInit {
    
    constructor(private titleService: Title ){ }

    ngOnInit() { }

    //设置title
    setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}