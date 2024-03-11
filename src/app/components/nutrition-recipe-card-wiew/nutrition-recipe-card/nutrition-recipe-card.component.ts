import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NutritionRecipeCardConfig } from '../nutrition-recipe-card.interface';
import { DIFFICULTY, DifficultyInfo } from '../../../enums/difficulty.enum';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nutrition-recipe-card',
  templateUrl: './nutrition-recipe-card.component.html',
  styleUrl: './nutrition-recipe-card.component.scss',
  animations: [
    trigger("changeSide", [
      transition(":enter", [
        style({
          opacity: 0,
          
        }),
        animate("500ms", style({ opacity: 1,  }))
      ]),
      transition(":leave", [
        style({
         display: "none",
          
        }),
        animate("500ms", style({ opacity: 0, }))
      ])
    ]),
  ]
  
})
export class NutritionRecipeCardComponent implements OnInit {

  @Input({ required: true }) config!: NutritionRecipeCardConfig;
  @Output() favoriteChanges = new EventEmitter<number>();
  @Output() changeRecipe = new EventEmitter<{ id: number; mealTime: string[] }>();

  public difficultyTemplate!: DifficultyInfo
  isFront: boolean = true;
  isFavorite: boolean = false;

  ngOnInit(): void {
    this.difficultyTemplate = DIFFICULTY[this.config?.difficulty]
  }

  refreshClick() { 
    const response = {id: this.config.id, mealTime: this.config.mealTime}
    this.changeRecipe.emit(response)
  }

  changeSide() {
    this.isFront = !this.isFront;
  }
  toggleFavorite() {

    this.favoriteChanges.emit(this.config.id)
  }


}
