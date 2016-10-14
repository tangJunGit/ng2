import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { fromRouting } from './form.routing';
import { FormComponent } from './form.component';
import { FormBuilderComponent }   from './form-builder.component';
import { ValidationComponent } from './validation.component';
 
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        fromRouting
    ],
    exports: [],
    declarations: [
        FormComponent,
        FormBuilderComponent,
        ValidationComponent
    ],
    providers: [],
})
export class FormBuilderDemoModule { }
