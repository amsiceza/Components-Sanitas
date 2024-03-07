import { Component, Input } from '@angular/core';
import { NutritionMealsCardConfig } from '../nutrition-meals-card.interface';

@Component({
  selector: 'app-nutrition-meals-card',
  templateUrl: './nutrition-meals-card.component.html',
  styleUrl: './nutrition-meals-card.component.scss',
})
export class NutritionMealsCardComponent{
  @Input({required: true}) config!: NutritionMealsCardConfig;
  
}
