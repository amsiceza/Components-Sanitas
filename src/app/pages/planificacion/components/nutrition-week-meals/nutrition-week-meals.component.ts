import { Component, Input, OnInit } from '@angular/core';
import { DIAS, MESES } from '../../../../constants/dates.constants';
import { MEALS } from '../../../../constants/meals.constants';

@Component({
  selector: 'app-nutrition-week-meals',
  templateUrl: './nutrition-week-meals.component.html',
  styleUrl: './nutrition-week-meals.component.scss'
})
export class NutritionWeekMealsComponent implements OnInit{
  @Input({required: true}) day!: Date;
  spanishDays = DIAS;
  spanishMonths = MESES;
  mealsButtons: string[] = [];

  ngOnInit() {
    Object.values(MEALS).forEach((meal) => {
      this.mealsButtons.push(meal);
    });
  }
}
