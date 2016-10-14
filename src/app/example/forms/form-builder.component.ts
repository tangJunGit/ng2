import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'form-builder-demo',
    template: `
        <div class="col-md-6">
            <h2>Demo FormBuilder: SKU</h2>
            <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
                <div class="form-group">
                    <label for="skuInput">SKU</label>
                    <input type="text" id="skuInput" class="form-control" 
                    [formControl]="myForm.controls['sku']" placeholder="SKU">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
    `
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