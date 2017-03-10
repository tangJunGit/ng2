import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  exampleLinks: Array<any> = [
    {path: '/form', text: 'Form（表单）'},
    {path: '/form-builder', text: 'FormBuilder'},
    {path: '/validation', text: 'Validations（验证）'},
  ];

  componentLinks: Array<any> = [
    
  ];
  constructor() { }

  ngOnInit() {
  }

}