/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WinLoseReportComponent } from './win-lose-report.component';

describe('WinLoseReportComponent', () => {
  let component: WinLoseReportComponent;
  let fixture: ComponentFixture<WinLoseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLoseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinLoseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
