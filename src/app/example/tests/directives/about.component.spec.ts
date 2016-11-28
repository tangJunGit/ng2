import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA  } from '@angular/core';

import { AboutComponent } from './about.component';
import { HighlightDirective } from './highlight.directive';


let comp:    AboutComponent;
let fixture: ComponentFixture<AboutComponent>;
let el:      HTMLElement;
let des:     DebugElement[];
let bareH2:     DebugElement;


describe('directive', () => {
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [ HighlightDirective, AboutComponent ]
        })
        .createComponent(AboutComponent);

        fixture.detectChanges(); 

        //获取所有指令
        des = fixture.debugElement.queryAll(By.directive(HighlightDirective));

        //获取没有 highlight 属性的 h2
        bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])'));
    });

    // color 测试
    it('should have three highlighted elements', () => {
        expect(des.length).toBe(3);
    });

    it('should color 1st <h2> background "yellow"', () => {
        expect(des[0].styles['backgroundColor']).toBe('yellow');
    });

    it('should color 2nd <h2> background w/ default color', () => {
        const dir = des[1].injector.get(HighlightDirective) as HighlightDirective;
        expect(des[1].styles['backgroundColor']).toBe(dir.defaultColor);
    });

    // customProperty 属性测试
    it('all highlighted elements should have a true customProperty', () => {
        const allTrue = des.map((de: any) => !!de.properties['customProperty']).every((v:any) => v === true);
        expect(allTrue).toBe(true);
    });
    it('bare <h2> should not have a customProperty', () => {
        expect(bareH2.properties['customProperty']).toBeUndefined();
    });



});