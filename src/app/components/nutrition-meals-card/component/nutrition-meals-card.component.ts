import { Component, Input, OnInit } from '@angular/core';
import { NutritionMealsCardConfig } from '../nutrition-meals-card.interface';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nutrition-meals-card',
  templateUrl: './nutrition-meals-card.component.html',
  styleUrl: './nutrition-meals-card.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [ 
        style({opacity:0}),
        animate('500ms', style({opacity:1})) 
      ]),
      transition(':leave', [  
        style({
          opacity:0,
          display: 'none'
        }),
        animate('500ms', style({opacity:0})) 
      ])
    ])
  ],
})
export class NutritionMealsCardComponent implements OnInit{
  @Input({required: true}) config!: NutritionMealsCardConfig;
  public isFront = true;
  public backgroundImage = '';

  ngOnInit(): void {
    this.backgroundImage = this.config.frontImage;
  }

  public flipCard(): void {
    this.isFront = !this.isFront;
    this.backgroundImage = this.isFront ? this.config.frontImage : this.config.backImage;
  }
}
