//测试依赖组件
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WelcomeComponent } from './depend.component';
import { UserService  }  from './user.service';

let comp: WelcomeComponent;
let fixture: ComponentFixture<WelcomeComponent>;
let de: DebugElement;
let el: HTMLElement;
let userService: UserService ;
let userServiceStub: UserService;

describe('WelcomeComponent', () => {
    beforeEach(() => {

        //测试的需求
        userServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User'}
        }
    
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
             //被测试的组件不一定要注入真正的服务,spec 的主要目的是测试组件，而不是服务。真实的服务可能自身有问题。
            providers: [ {provide: UserService, useValue: userServiceStub } ] 
        });

        fixture = TestBed.createComponent(WelcomeComponent);
        comp    = fixture.componentInstance;

        userService = fixture.debugElement.injector.get(UserService);    //从根注入器中获取服务

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