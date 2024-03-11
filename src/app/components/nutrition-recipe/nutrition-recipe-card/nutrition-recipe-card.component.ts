import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DIFFICULTY, DifficultyInfo } from '../../../enums/difficulty.enum';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';

@Component({
  selector: 'app-nutrition-recipe-card',
  templateUrl: './nutrition-recipe-card.component.html',
  styleUrl: './nutrition-recipe-card.component.scss'
})
export class NutritionRecipeCardComponent implements OnInit{
  @Input({required: true}) config!: NutritionRecipeInterface 
  @Output() favoriteChanges = new EventEmitter<number>();
  public difficultyTemplate!: DifficultyInfo

  ngOnInit(): void {
    this.difficultyTemplate = DIFFICULTY[this.config?.difficulty]
  }


  toggleFavorite(){
      this.favoriteChanges.emit(this.config.id)
  }
}
