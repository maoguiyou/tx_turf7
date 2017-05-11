/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RacingResultComponent } from './racing-result.component';

describe('RacingResultComponent', () => {
  let component: RacingResultComponent;
  let fixture: ComponentFixture<RacingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
