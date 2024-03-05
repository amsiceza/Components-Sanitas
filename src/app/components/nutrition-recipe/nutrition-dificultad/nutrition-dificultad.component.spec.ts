import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDificultadComponent } from './nutrition-dificultad.component';

describe('NutritionDificultadComponent', () => {
  let component: NutritionDificultadComponent;
  let fixture: ComponentFixture<NutritionDificultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionDificultadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
