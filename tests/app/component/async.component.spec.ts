//测试异步依赖组件
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TwainComponent } from './async.component';
import { TwainService  }  from './twain.service';

let comp: TwainComponent;
let fixture: ComponentFixture<TwainComponent>;
let de: DebugElement;
let el: HTMLElement;
let twainService: TwainService ;
let spy: any;

describe('TwainComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TwainComponent],
            providers: [TwainService]
        });

        fixture = TestBed.createComponent(TwainComponent);
        comp    = fixture.componentInstance;

        twainService = fixture.debugElement.injector.get(TwainService);
        
        //设置getQuote方法
        //spy = spyOn(twainService, 'getQuote').and.returnValue(Promise.resolve(testQuote));

        de = fixture.debugElement.query(By.css('.twain'));
        el = de.nativeElement;
    });
});

