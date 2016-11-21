import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { UserService } from './user.service';

let comp: WelcomeComponent;
let fixture: ComponentFixture<WelcomeComponent>;
let de: DebugElement;
let el: HTMLElement;
let userServiceStub: any;
let userService: UserService;

describe('WelcomeComponent', () => {
    beforeEach(() => {
        // UserService   stub 类
        userServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User'}
        };
    
        TestBed.configureTestingModule({
            declarations: [ WelcomeComponent ],
            providers:    [ {provide: UserService, useValue: userServiceStub } ]      // 不能提供真实的服务
        });
    
        fixture = TestBed.createComponent(WelcomeComponent);
        comp    = fixture.componentInstance;
        
        userService = fixture.debugElement.injector.get(UserService);     //组件注入器
    
        de = fixture.debugElement.query(By.css('.welcome'));
        el = de.nativeElement;
    });
    
    it('should welcome the user', () => {
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).toContain('Welcome', '"Welcome ..."');
        expect(content).toContain('Test User', 'expected name');
    });
    
    it('should welcome "Bubba"', () => {
        userService.user.name = 'Bubba'; 
        fixture.detectChanges();
        expect(el.textContent).toContain('Bubba');
    });
    
    it('should request login if not logged in', () => {
        userService.isLoggedIn = false; 
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).not.toContain('Welcome', 'not welcomed');
        expect(content).toMatch(/log in/i, '"log in"');
    });

});

