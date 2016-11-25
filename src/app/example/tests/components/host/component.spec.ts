import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardHeroComponent } from '../external/dashboard-hero.component';
import { TestHostComponent } from './dashboard.component';
import { Hero } from '../external/hero.model';

let testHost:    TestHostComponent;
let fixture: ComponentFixture<TestHostComponent>;
let heroEl:      DebugElement;
let el:      HTMLElement;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('router', () => {
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [ DashboardHeroComponent, TestHostComponent ], 
        });
    }));

    beforeEach(() => {
        fixture  = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        heroEl   = fixture.debugElement.query(By.css('.hero')); 
        fixture.detectChanges();
    });

    it('should display hero name', () => {
        const expectedPipedName = testHost.hero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });

    it('should raise selected event when clicked', () => {
        heroEl.triggerEventHandler('click', null);
        expect(testHost.selectedHero).toBe(testHost.hero);
    });



});