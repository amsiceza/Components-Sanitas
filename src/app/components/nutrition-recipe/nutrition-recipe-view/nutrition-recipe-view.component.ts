import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';
import { RecipesService } from '../../../services/recipes-service/recipes.service';
import { RecipesInterface } from '../../../services/recipes-service/recipes.interface';
import { SwiperContainer, register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-nutrition-recipe-view',
  templateUrl: './nutrition-recipe-view.component.html',
  styleUrls: ['./nutrition-recipe-view.component.scss'],
})
export class NutritionRecipeViewComponent implements OnChanges, AfterViewInit {
  @Input() recipes: RecipesInterface[] | undefined;
  public config: NutritionRecipeInterface[] | undefined;

  constructor(private recipesService: RecipesService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['recipes']) {
      this.config = this.recipes?.map((recipe) => ({
        id: recipe.id,
        title: recipe.name,
        difficulty: recipe.difficulty,
        duration: recipe.duration,
        liked: recipe.isFavorite,
        backgroundImage: recipe.recipeImg,
        mealTime: recipe.mealTime,
      }));
    }
  }

  toggleFavorite(response: number) {
    this.recipesService.toggleFavorite(response);
  }

  ngAfterViewInit(): void {
    this.initilizeSmallScreenSwiper();
  }

  private initilizeSmallScreenSwiper() {
    const swiperEl = document.querySelector('swiper-container') as SwiperContainer;

    const swiperParams = {
      spaceBetween: 16,
      slidesPerView: 1,
      breakpoints: {
        
      },
      on: {
        init() {},
      },
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  }
}


