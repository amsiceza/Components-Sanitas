import { Component, Input, OnInit } from '@angular/core';
import { DIFFICULTY, DifficultyInfo } from '../../../enums/difficulty.enum';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';

@Component({
  selector: 'app-nutrition-recipe-card',
  templateUrl: './nutrition-recipe-card.component.html',
  styleUrl: './nutrition-recipe-card.component.scss'
})
export class NutritionRecipeCardComponent implements OnInit{
  @Input({required: true}) config!: NutritionRecipeInterface 
  public difficultyTemplate!: DifficultyInfo

  ngOnInit(): void {
    this.difficultyTemplate = DIFFICULTY[this.config?.difficulty]
  }


  toggleFavorite(){
    if(this.config !== undefined){
      this.config.liked = !this.config.liked;
    }
    
  }
}
