import { Component, OnInit } from '@angular/core';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';
import { recipesMock } from '../card-recetas/mock';

@Component({
  selector: 'app-slider-recetas',
  templateUrl: './slider-recetas.component.html',
  styleUrl: './slider-recetas.component.scss'
})
export class SliderRecetasComponent implements OnInit{
  recipesArray: NutritionRecipeInterface[] = recipesMock

  ngOnInit(){
  }
}
