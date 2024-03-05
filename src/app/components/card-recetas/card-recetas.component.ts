import { Component, Input } from '@angular/core';
import { receta } from '../../interfaces/recetas-interface';

@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrl: './card-recetas.component.scss'
})
export class CardRecetasComponent {
  @Input() receta: receta | undefined
}
