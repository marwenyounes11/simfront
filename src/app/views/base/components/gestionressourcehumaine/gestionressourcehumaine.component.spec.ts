import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRessourcehumaineComponent } from './gestionressourcehumaine.component';

describe('GestionRessourcehumaineComponent', () => {
  let component: GestionRessourcehumaineComponent;
  let fixture: ComponentFixture<GestionRessourcehumaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRessourcehumaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRessourcehumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
