import { AfterViewChecked, AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RecipesInterface } from '../../../../services/recipes-service/recipes.interface';
import { RecipesService } from '../../../../services/recipes-service/recipes.service';
import { FormControl } from '@angular/forms';
import { SwiperContainer, register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-recetas-page',
  templateUrl: './recetas-page.component.html',
  styleUrls: ['./recetas-page.component.scss'],
})
export class RecetasPageComponent implements OnInit, AfterViewInit, AfterViewChecked {
  breakfastRecipes: RecipesInterface[] | undefined;
  snackRecipes: RecipesInterface[] | undefined;
  lunchRecipes: RecipesInterface[] | undefined;
  dinnerRecipes: RecipesInterface[] | undefined;

  isScreenSmall: boolean = false;
  isBigSwiper: boolean = false;

  searchCoursesControl = new FormControl();

  constructor(private recipesService: RecipesService) {
    
  }

  ngOnInit(): void {
    this.recipesService.fetchRecipes();

    this.recipesService.recipes$.subscribe((recipes) => {
      this.breakfastRecipes =
        this.recipesService.getRecipesByMealTime('Desayuno');
      this.snackRecipes = this.recipesService.getRecipesByMealTime('Almuerzo');
      this.lunchRecipes = this.recipesService.getRecipesByMealTime('Comida');
      this.dinnerRecipes = this.recipesService.getRecipesByMealTime('Cena');
    });

    this.searchCoursesControl.valueChanges.subscribe((searchValue) => {
      if (searchValue || searchValue == '') {
        this.recipesService.filterRecipes(searchValue);
        this.recipesService.filteredRecipes$.subscribe((filteredRecipes) => {
          this.breakfastRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Desayuno')
          );
          this.snackRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Almuerzo')
          );
          this.lunchRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Comida')
          );
          this.dinnerRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Cena')
          );
        });
      } else {
        this.recipesService.fetchRecipes();
      }
    });

    this.checkScreenSize();
  }

  ngAfterViewInit(): void {
    if (this.isScreenSmall) {
      this.isBigSwiper = false;
    }else{
      this.initilizeBigScreenSwiper();
    }
  }

  ngAfterViewChecked(): void {
    if (!this.isScreenSmall && !this.isBigSwiper) {
      this.initilizeBigScreenSwiper();
    }else if (this.isScreenSmall){
      this.isBigSwiper = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  private checkScreenSize() {
    this.isScreenSmall = window.innerWidth < 600;
  }

  private initilizeBigScreenSwiper() {
    this.isBigSwiper = true;
    const swiperEls = document.querySelectorAll('swiper-container');
    
    const swiperParams = {
      spaceBetween: 16,
      slidesPerView: 1,
      breakpoints: {
        600: {
          slidesPerView: 1.3,
        },
        900: {
          slidesPerView: 2,
        },
        1050: {
          slidesPerView: 2.3,
        },
        1100: {
          slidesPerView: 1.6,
        },
        1400: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 2.3,
        }
      },
      on: {
        init() {},
      },
    };

    swiperEls.forEach((swiperEl: SwiperContainer) => {
      Object.assign(swiperEl, swiperParams);

      swiperEl.initialize();
    });
  }
}
