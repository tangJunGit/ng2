import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner.component';

let comp:    BannerComponent;
let fixture: ComponentFixture<BannerComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('BannerComponent', () => {
    beforeEach(() => {
        //声明要测试的组件 
        TestBed.configureTestingModule({
            declarations: [ BannerComponent ], 
        });

        //组件实例，并关闭当前 TestBed 实例，让它不能再被配置
        fixture = TestBed.createComponent(BannerComponent);
        
        comp = fixture.componentInstance;    
        
        // By.css 指 css 选择器 
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    
    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();             // 执行变化检测
        expect(el.textContent).toContain('Test Title');
    });

});

