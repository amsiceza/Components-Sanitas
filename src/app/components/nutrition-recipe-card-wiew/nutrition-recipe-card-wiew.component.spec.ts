import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionRecipeCardWiewComponent } from './nutrition-recipe-card-wiew.component';

describe('NutritionRecipeCardWiewComponent', () => {
  let component: NutritionRecipeCardWiewComponent;
  let fixture: ComponentFixture<NutritionRecipeCardWiewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionRecipeCardWiewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionRecipeCardWiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
