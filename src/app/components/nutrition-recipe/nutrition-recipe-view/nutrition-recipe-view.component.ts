import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';
import { RecipesService } from '../../../services/recipes-service/recipes.service';
import { RecipesInterface } from '../../../services/recipes-service/recipes.interface';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { flush } from '@angular/core/testing';

register();

@Component({
  selector: 'app-nutrition-recipe-view',
  templateUrl: './nutrition-recipe-view.component.html',
  styleUrls: ['./nutrition-recipe-view.component.scss'],
})
export class NutritionRecipeViewComponent implements OnChanges, AfterViewInit {
  @Input() recipes: RecipesInterface[] | undefined;
  public config: NutritionRecipeInterface[] | undefined;

  isScreenSmall : boolean | undefined
  isSmallSwiper: boolean = false

  constructor(private recipesService: RecipesService, private elementRef: ElementRef) {}

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
    if(this.isScreenSmall){
      this.isSmallSwiper = false
    }else{

      this.initilizeSmallScreenSwiper();
    }
  }
 

  ngAfterViewChecked(): void {
    if(this.isScreenSmall && this.isSmallSwiper){
      this.initilizeSmallScreenSwiper();
    }else if(!this.isScreenSmall){
      this.isSmallSwiper = false
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  private checkScreenSize() {
    this.isScreenSmall = window.innerWidth < 600;
  }

  private initilizeSmallScreenSwiper() {
    this.isSmallSwiper= true
    const swiperEls = this.elementRef.nativeElement.querySelectorAll('swiper-container');
    const swiperParams = {
      spaceBetween: 16,
      slidesPerView: 1,
      breakpoints: {
        100: {
          slidesPerView: 1,
        },
        270: {
          slidesPerView: 1.4,
        },
        300: {
          slidesPerView: 1.6,
        },
        360: {
          slidesPerView: 2,
        },
        390: {
          slidesPerView: 2.2,
        },
        450: {
          slidesPerView: 2.5,
        }
    ,
        550: {
          slidesPerView: 3,
        },
        
      },
      on: {
        init() {},
      },
    };


    swiperEls.forEach((swiperEl: SwiperContainer) => {
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    });  }
}


