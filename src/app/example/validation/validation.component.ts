import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { skuValidator } from './custom-validations';  //自定义验证

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
})
export class ValidationComponent implements OnInit {
    myForm: FormGroup;
    sku: AbstractControl;

    constructor(fb:FormBuilder) { 
        this.myForm = fb.group({
            'sku': [
              '',               // 初始值为空
              Validators.compose([              // 合并验证
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