import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionWeekMealsComponent } from './nutrition-week-meals.component';

describe('NutritionWeekMealsComponent', () => {
  let component: NutritionWeekMealsComponent;
  let fixture: ComponentFixture<NutritionWeekMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionWeekMealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionWeekMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
