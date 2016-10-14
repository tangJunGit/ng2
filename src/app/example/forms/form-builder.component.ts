import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'form-builder-demo',
    templateUrl: 'form-builder.component.html'
})
export class FormBuilderComponent implements OnInit {
    myForm: FormGroup;

    constructor(fb:FormBuilder) { 
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }

    ngOnInit() { }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }
}