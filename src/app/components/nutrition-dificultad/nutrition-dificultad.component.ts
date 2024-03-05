import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nutrition-dificultad',
  templateUrl: './nutrition-dificultad.component.html',
  styleUrl: './nutrition-dificultad.component.scss'
})
export class NutritionDificultadComponent {
  @Input() dificultad: string | undefined;

}
