import { Component, OnInit } from '@angular/core';
import { NutritionRecipeCardConfig } from './nutrition-recipe-card.interface';
import { nutritionRecipeCardMock } from './nutrition-recipe-card-mock';

@Component({
  selector: 'app-nutrition-recipe-card-wiew',
  templateUrl: './nutrition-recipe-card-wiew.component.html',
  styleUrl: './nutrition-recipe-card-wiew.component.scss'
})
export class NutritionRecipeCardWiewComponent implements OnInit{
 configs! : NutritionRecipeCardConfig[] 

 ngOnInit(): void {
     this.configs = nutritionRecipeCardMock;
 }
}
