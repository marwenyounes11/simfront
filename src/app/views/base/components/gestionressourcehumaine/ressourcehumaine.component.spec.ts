import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcehumaineComponent } from './ressourcehumaine.component';

describe('RessourcehumaineComponent', () => {
  let component: RessourcehumaineComponent;
  let fixture: ComponentFixture<RessourcehumaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourcehumaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcehumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
