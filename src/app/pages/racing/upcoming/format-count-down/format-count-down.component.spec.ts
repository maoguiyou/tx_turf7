/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormatCountDownComponent } from './format-count-down.component';

describe('FormatCountDownComponent', () => {
  let component: FormatCountDownComponent;
  let fixture: ComponentFixture<FormatCountDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatCountDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
