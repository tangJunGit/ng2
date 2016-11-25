import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HttpModule } from '@angular/http';

import { TwainComponent } from './twain.component';
import { TwainService } from './twain.service';

let comp: TwainComponent;
let fixture: ComponentFixture<TwainComponent>;
let de: DebugElement;
let el: HTMLElement;
let twainService: TwainService;
let spy: any;
let testQuote: string = 'test';

describe('TwainComponent', () => {
    beforeEach(() => {
         TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [TwainComponent],
            providers: [TwainService]
        });

        fixture = TestBed.createComponent(TwainComponent);
        comp = fixture.componentInstance;

        twainService = fixture.debugElement.injector.get(TwainService);
        
        //用 Jasmine 的 spy 替换关键的 getQuote 方法
        //Spy 拦截了实际 getQuote 方法，所有它不会联系服务。
        spy =  spyOn(twainService, 'getQuote').and.returnValue(Promise.resolve(testQuote));

        de = fixture.debugElement.query(By.css('.twain'));
        el = de.nativeElement;
    });

    it('should not show quote before OnInit', () => {
        expect(el.textContent).toBe('', 'nothing displayed');
        expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    });

    it('should still not show quote after component initialized', () => {
        fixture.detectChanges();
        expect(el.textContent).toBe('...', 'no quote yet');
        expect(spy.calls.any()).toBe(true, 'getQuote called');
    });

    /**
     * 异步方法一
     */
    it('should show quote after getQuote promise (async)', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => { // 等待异步 getQuote 方法
            fixture.detectChanges();        
            expect(el.textContent).toBe(testQuote);
        });
    }));
   
   /**
     * 异步方法二
     */
   it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
        fixture.detectChanges();
        tick();                  // 等待异步 getQuote 方法
        fixture.detectChanges(); 
        expect(el.textContent).toBe(testQuote);
    }));
});