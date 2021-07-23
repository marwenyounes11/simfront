import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrsimbyrhComponent } from './nbrsimbyrh.component';

describe('NbrsimbyrhComponent', () => {
  let component: NbrsimbyrhComponent;
  let fixture: ComponentFixture<NbrsimbyrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrsimbyrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrsimbyrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
