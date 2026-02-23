import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMatDemo } from './angular-mat-demo';

describe('AngularMatDemo', () => {
  let component: AngularMatDemo;
  let fixture: ComponentFixture<AngularMatDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMatDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMatDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
