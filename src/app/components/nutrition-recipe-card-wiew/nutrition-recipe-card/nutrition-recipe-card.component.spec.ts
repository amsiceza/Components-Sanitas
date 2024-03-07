import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionRecipeCardComponent } from './nutrition-recipe-card.component';

describe('NutritionRecipeCardComponent', () => {
  let component: NutritionRecipeCardComponent;
  let fixture: ComponentFixture<NutritionRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionRecipeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
