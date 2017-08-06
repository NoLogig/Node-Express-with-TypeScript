<<<<<<< HEAD
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
=======
/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';

let component:  AppComponent;
let fixture:    ComponentFixture<AppComponent>;

describe('App: Tmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:        [HttpModule, RouterTestingModule, StoreModule.provideStore({}), SharedModule],
      declarations:   [AppComponent],
      providers:      [],

      schemas:        [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture     = TestBed.createComponent(AppComponent);
    component   = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

>>>>>>> 3ee57cea1c0778c3534aa3feacddba2def4d8e3f
});
