import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  exampleLinks: Array<any> = [
    {path: '/form', text: 'Form'},
    {path: '/form-builder', text: 'FormBuilder'},
    {path: '/validation', text: 'Validations'},
    {path: '/http', text: 'Http'},
    {path: '/http-search', text: 'Search'},
    {path: '/router', text: 'Router'},
  ];

  componentLinks: Array<any> = [
    
  ];
  constructor() { }

  ngOnInit() {
  }

}