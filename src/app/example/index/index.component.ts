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
    {path: '/validation', text: '表单验证'},
    {path: '/http', text: 'Http'},
    {path: '/http-search', text: '搜索框'},
    {path: '/router', text: 'Router'},
    {path: '/auth', text: '守卫'},
    {path: '/directive', text: '指令'},
  ];

  componentLinks: Array<any> = [
    
  ];
  constructor() { }

  ngOnInit() {
  }

}