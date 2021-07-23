import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimbyrhComponent } from './simbyrh.component';

describe('SimbyrhComponent', () => {
  let component: SimbyrhComponent;
  let fixture: ComponentFixture<SimbyrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimbyrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimbyrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
