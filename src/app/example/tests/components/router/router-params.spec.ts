import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../external/hero.model';
import { ActivatedRouteStub as activatedRoute } from './router-stubs';
import { HeroService } from './hero.service';

let comp:    HeroDetailComponent;
let fixture: ComponentFixture<HeroDetailComponent>;
let heroEl:      DebugElement;
let el:      HTMLElement;
let page: Page;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('router params', () => {
    let hds: StubHeroService;

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports:      [ FormsModule ],
            declarations: [ HeroDetailComponent ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRoute },
                { provide: Router,         useClass: RouterStub},
            ]
        })
        .overrideComponent(HeroDetailComponent, {
            set: {
                providers: [
                    { provide: HeroService, useClass: StubHeroService }
                ]
            }
        });
    }));


});

// 创建
function createComponent() {
  fixture = TestBed.createComponent(HeroDetailComponent);
  comp    = fixture.componentInstance;
  page    = new Page();

  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    page.addPageElements();
  });
}

//伪造 StubHeroService
class StubHeroService {
  testHero = new Hero(42, 'Test Hero');

  getHero(id: number | string): Promise<Hero>  {
    return Promise.resolve(true).then(() => Object.assign({}, this.testHero) );
  }

  saveHero(hero: Hero): Promise<Hero> {
    return Promise.resolve(true).then(() => Object.assign(this.testHero, hero) );
  }
}

class Page {
  gotoSpy:      jasmine.Spy;
  navSpy:       jasmine.Spy;
  saveSpy:      jasmine.Spy;

  saveBtn:      DebugElement;
  cancelBtn:    DebugElement;
  nameDisplay:  HTMLElement;
  nameInput:    HTMLInputElement;

  constructor() {
    const compInjector = fixture.debugElement.injector;
    const hds          = compInjector.get(HeroService);
    const router       = compInjector.get(Router);

    // this.gotoSpy       = spyOn(comp, 'gotoList').and.callThrough();
    // this.navSpy        = spyOn(router, 'navigate');
    // this.saveSpy       = spyOn(hds, 'saveHero').and.callThrough();
  }

  addPageElements() {
    if (comp.hero) {
      const buttons    = fixture.debugElement.queryAll(By.css('button'));
      this.saveBtn     = buttons[0];
      this.cancelBtn   = buttons[1];
      this.nameDisplay = fixture.debugElement.query(By.css('span')).nativeElement;
      this.nameInput   = fixture.debugElement.query(By.css('input')).nativeElement;
    }
  }
}
