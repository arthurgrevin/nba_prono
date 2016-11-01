/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PronosComponent } from './pronos.component';

describe('PronosComponent', () => {
  let component: PronosComponent;
  let fixture: ComponentFixture<PronosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
