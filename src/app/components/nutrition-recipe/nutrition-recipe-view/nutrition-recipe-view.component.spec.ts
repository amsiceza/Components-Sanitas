import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutritionRecipeViewComponent } from './nutrition-recipe-view.component';


describe('SliderRecetasComponent', () => {
  let component: NutritionRecipeViewComponent;
  let fixture: ComponentFixture<NutritionRecipeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionRecipeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionRecipeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
