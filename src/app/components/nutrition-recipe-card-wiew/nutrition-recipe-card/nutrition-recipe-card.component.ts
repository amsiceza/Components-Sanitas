import { Component, Input, OnInit } from '@angular/core';
import { NutritionRecipeCardConfig } from '../nutrition-recipe-card.interface';

@Component({
  selector: 'app-nutrition-recipe-card',
  templateUrl: './nutrition-recipe-card.component.html',
  styleUrl: './nutrition-recipe-card.component.scss'
})
export class NutritionRecipeCardComponent  {
 @Input({required: true}) config!: NutritionRecipeCardConfig;
 isFront:boolean = true;
 isFavorite:boolean = false;
 
 refreshClick(){}

 changeSide(){
      this.isFront = !this.isFront;
 }
 favoriteClick(){}
 flip(){}
 
}
