import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-form',
    template: `
        <div class="col-md-6">
            <h2>Demo Form: SKU</h2>
            <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
                <div class="form-group">
                    <label for="skuInput">SKU</label>
                    <input type="text" id="skuInput" class="form-control" placeholder="SKU" 
                    name="sku" [(ngModel)]="sku">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
    `
})
export class FormComponent implements OnInit {
    sku:string = "ABC";

    constructor() { }

    ngOnInit() { }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }
}