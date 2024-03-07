import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionMealsCardComponent } from './nutrition-meals-card.component';

describe('NutritionMealsCardComponent', () => {
  let component: NutritionMealsCardComponent;
  let fixture: ComponentFixture<NutritionMealsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionMealsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionMealsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
