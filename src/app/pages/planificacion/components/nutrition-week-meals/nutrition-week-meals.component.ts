import { Component, Input } from '@angular/core';
import { DIAS, MESES } from '../../../../constants/dates.constants';

@Component({
  selector: 'app-nutrition-week-meals',
  templateUrl: './nutrition-week-meals.component.html',
  styleUrl: './nutrition-week-meals.component.scss'
})
export class NutritionWeekMealsComponent {
  @Input({required: true}) day!: Date;
  spanishDays = DIAS;
  spanishMonths = MESES;
}
