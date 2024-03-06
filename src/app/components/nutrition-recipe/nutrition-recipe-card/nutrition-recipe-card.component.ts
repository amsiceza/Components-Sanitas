import { Component, Input, OnInit } from '@angular/core';
import { DIFICULTY, DificultyInfo } from '../../../enums/dificulty.enum';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';

@Component({
  selector: 'app-nutrition-recipe-card',
  templateUrl: './nutrition-recipe-card.component.html',
  styleUrl: './nutrition-recipe-card.component.scss'
})
export class NutritionRecipeCardComponent implements OnInit{
  @Input({required: true}) recipe!: NutritionRecipeInterface 
  public difficultyTemplate!: DificultyInfo

  ngOnInit(): void {
    this.difficultyTemplate = DIFICULTY[this.recipe?.difficulty]
  }


  toggleFavorite(){
    if(this.recipe !== undefined){
      this.recipe.liked = !this.recipe.liked;
    }
    
  }
}
