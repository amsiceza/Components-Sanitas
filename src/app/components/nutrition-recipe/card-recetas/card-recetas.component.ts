import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../nutrition-recipe.interface';
import { DIFICULTY, DificultyInfo } from '../../../enums/dificulty.enum';

@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrl: './card-recetas.component.scss'
})
export class CardRecetasComponent implements OnInit{
  @Input({required: true}) recipe!: Receta 
  public dificultyTemplate!: DificultyInfo

  ngOnInit(): void {
    this.dificultyTemplate = DIFICULTY[this.recipe?.dificultad]
  }


  toggleFavorite(){
    if(this.recipe !== undefined){
      this.recipe.liked = !this.recipe.liked;
    }
    
  }
}
