import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardHeroComponent } from './dashboard-hero.component';
import { Hero } from './hero.model';

let comp:    DashboardHeroComponent;
let fixture: ComponentFixture<DashboardHeroComponent>;
let heroEl:      DebugElement;
let el:      HTMLElement;
let expectedHero : Hero;

describe('DashboardHeroComponent', () => {
    /**
     * 编译器必须预先从文件系统读取这些文件，它才能创建组件实例。
     */
    //async
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardHeroComponent]
        }); 
    }));

    //sync
    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardHeroComponent);
        comp    = fixture.componentInstance;
        heroEl  = fixture.debugElement.query(By.css('.hero'));

        /**
         * 模拟 expectedHero 赋值给组件的 hero 属性
         */
        expectedHero = new Hero(42, 'Test Name');
        comp.hero = expectedHero;
        fixture.detectChanges();
    });

    it('should display hero name', () => {
        const expectedPipedName = expectedHero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });

    it('should raise selected event when clicked', () => {
        let selectedHero: Hero;
        // 通过订阅 selected 事件而检测到这个值
        comp.selected.subscribe((hero: Hero) => selectedHero = hero);

        // "click" 事件绑定作出响应   第二个参数是传递给事件处理器的事件对象
        heroEl.triggerEventHandler('click', null);
        expect(selectedHero).toBe(expectedHero);
    });

    

});