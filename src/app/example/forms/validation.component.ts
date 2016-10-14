import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { skuValidator } from './custom-validations';  //自定义验证

@Component({
    selector: 'form-validation',
    template: `
        <div class="col-md-6">
            <h2>Demo FormValidation: SKU</h2>
            <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
                <div class="form-group">
                    <label for="skuInput">SKU</label>
                    <input type="text" id="skuInput" class="form-control" 
                    [formControl]="myForm.controls['sku']" placeholder="SKU">
                    <div class="alert alert-danger" role="alert" [hidden]="myForm.controls['sku'].valid">SKU is invalid</div>
                    <div class="alert alert-danger" role="alert" [hidden]="!myForm.controls['sku'].hasError('required')">SKU is required</div>
                    <div class="alert alert-danger" role="alert" [hidden]="!myForm.controls['sku'].hasError('invalidSku')">SKU must begin with '123' </div>
                </div>
                <div class="alert alert-danger" [hidden]="myForm.valid">Form is invalid</div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
    `
})
export class ValidationComponent implements OnInit {
    myForm: FormGroup;
    sku: AbstractControl;

    constructor(fb:FormBuilder) { 
        this.myForm = fb.group({
            'sku': ['', Validators.compose([
                Validators.required,
                skuValidator
            ])]
        });

        //监听sku值改变
        this.sku = this.myForm.controls['sku'];
        this.sku.valueChanges.subscribe(
            (value: string) => {
                console.log('sku changed to:', value);
            }    
        );
        ////监听表单改变
        this.myForm.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to:', form);
            }
        );
    }

    ngOnInit() { }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }
}