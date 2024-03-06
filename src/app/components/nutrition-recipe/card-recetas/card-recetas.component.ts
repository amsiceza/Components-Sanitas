import { Component, Input } from '@angular/core';
import { Receta } from '../nutrition-recipe.interface';

@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrl: './card-recetas.component.scss'
})
export class CardRecetasComponent {
  @Input() receta: Receta | undefined

  toggleFavorite(){
    if(this.receta !== undefined){
      this.receta.liked = !this.receta.liked;
    }
    
  }
}
