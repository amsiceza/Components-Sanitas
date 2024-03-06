import { Component, Input, OnInit } from '@angular/core';
import { recetas } from '../card-recetas/mock';
import { Receta } from '../nutrition-recipe.interface';

@Component({
  selector: 'app-slider-recetas',
  templateUrl: './slider-recetas.component.html',
  styleUrl: './slider-recetas.component.scss'
})
export class SliderRecetasComponent implements OnInit{
  recetasArray: Receta[] = recetas

  ngOnInit(){
  }
}
