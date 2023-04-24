import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccorComponent } from './accor.component';

describe('AccorComponent', () => {
  let component: AccorComponent;
  let fixture: ComponentFixture<AccorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
