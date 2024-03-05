import { Component, Input, OnInit } from '@angular/core';
import { receta } from '../../interfaces/recetas-interface';
import { recetas } from '../../mocks/recetas-mock';

@Component({
  selector: 'app-slider-recetas',
  templateUrl: './slider-recetas.component.html',
  styleUrl: './slider-recetas.component.scss'
})
export class SliderRecetasComponent implements OnInit{
  recetasArray: receta[] = recetas

  ngOnInit(){
  }
}
