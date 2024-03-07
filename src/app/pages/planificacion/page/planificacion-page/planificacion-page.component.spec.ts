import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionPageComponent } from './planificacion-page.component';

describe('PlanificacionPageComponent', () => {
  let component: PlanificacionPageComponent;
  let fixture: ComponentFixture<PlanificacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanificacionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
