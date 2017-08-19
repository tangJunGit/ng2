import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {


    constructor() { }

    ngOnInit() { }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }

}