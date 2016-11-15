// 测试组件
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BannerComponent } from './basic.component';

let comp: BannerComponent;
let fixture: ComponentFixture<BannerComponent>;
let de: DebugElement;
let el: HTMLElement;

describe('BannerComponent', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [BannerComponent],      //声明测试组件
    });

    fixture = TestBed.createComponent(BannerComponent);    //创建组件

    comp = fixture.componentInstance;      //组件实例化

    /**
     * 通过css选择器访问<h1>
     */
    de = fixture.debugElement.query(By.css('h1'));  //DebugElement 获取原生 HTML 元素
    el = de.nativeElement;

  });

  it('should display original title', () => {
    fixture.detectChanges();                    
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();              //在测试中的 Angular 变化检测
    expect(el.textContent).toContain('Test Title');
  });
});


