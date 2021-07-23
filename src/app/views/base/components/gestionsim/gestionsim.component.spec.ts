import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSimComponent } from './gestionsim.component';

describe('GestionSimComponent', () => {
  let component: GestionSimComponent;
  let fixture: ComponentFixture<GestionSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
