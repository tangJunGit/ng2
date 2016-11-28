import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardHeroComponent } from '../external/dashboard-hero.component';
import { DashboardComponent } from './dashboard.component';
import { Hero } from '../external/hero.model';
import { HeroService } from '../external/hero.service';

let comp:    DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;
let heroEl:      DebugElement;
let el:      HTMLElement;
let FakeHeroService: HeroService;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('router', () => {
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [ DashboardComponent, DashboardHeroComponent ], 
            //利用 Router 和 HeroService 的测试 stub 类来配置测试模块
            providers: [
                { provide: HeroService, useClass: FakeHeroService },
                { provide: Router,      useClass: RouterStub }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();  
        heroEl   = fixture.debugElement.query(By.css('.hero')); 
    });

    it('should tell ROUTER to navigate when hero clicked', inject([Router], (router: Router) => { 

        const spy = spyOn(router, 'navigateByUrl');

        heroEl.triggerEventHandler('click', null);

        // navigateByUrl 参数
        const navArgs = spy.calls.first().args[0];

        // 第一个 heroes 的 id
        const id = comp.heroes[0].id;
        expect(navArgs).toBe('/heroes/' + id, 'should nav to HeroDetail for first hero');
    }));

});