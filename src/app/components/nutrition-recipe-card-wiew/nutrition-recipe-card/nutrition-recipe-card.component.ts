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
        animate("500ms", style({ opacity: 1, }))
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
  @Output() favoriteChanges = new EventEmitter<void>();
  @Output() changeRecipe = new EventEmitter<number>();

  public difficultyTemplate!: DifficultyInfo
  isFront: boolean = true;

  ngOnInit(): void {
    this.difficultyTemplate = DIFFICULTY[this.config?.difficulty]
  }

  refreshClick() {
    this.changeRecipe.emit(this.config.id)
  }

  changeSide() {
    this.isFront = !this.isFront;
  }
  toggleFavorite() {
    this.favoriteChanges.emit()
  }


}
