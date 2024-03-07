import { Component } from '@angular/core';
import { mockNutritionMealsCard } from './components/nutrition-meals-card/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-components-sanitas';
  mockNutritionMealsCard = mockNutritionMealsCard;
}
