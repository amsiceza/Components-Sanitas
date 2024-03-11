import { RecipesInterface } from './recipes.interface';

export const recipesMock: RecipesInterface[] = [
  {
    id: 1,
    recipeImg: 'https://imag.bonviveur.com/tortilla-de-patata-con-chorizo.jpg',
    name: 'Tortilla de patatas con chorizo',
    duration: 30,
    difficulty: 0,
    isFavorite: true,
    mealTime: ['Desayuno'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['patatas', 'huevos', 'chorizo'],
      },
      {
        title: 'Condimentos',
        aliments: ['sal', 'pimienta'],
      },
      {
        title: 'Ingredientes principales',
        aliments: ['patatas', 'huevos', 'chorizo'],
      },
      {
        title: 'Condimentos',
        aliments: ['sal', 'pimienta'],
      },
    ],
  },
  {
    id: 2,
    recipeImg:
      'https://thefoodtech.com/wp-content/uploads/2022/07/lasagna--828x548.jpg',
    name: 'Lasaña de carne',
    duration: 60,
    difficulty: 1,
    isFavorite: false,
    mealTime: ['Cena'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['carne molida', 'salsa de tomate', 'pasta de lasaña'],
      },
      {
        title: 'Condimentos',
        aliments: ['queso parmesano', 'orégano'],
      },
    ],
  },
  {
    id: 3,
    recipeImg:
      'https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/03/13/5e9980dc708b4.jpeg',
    name: 'Sushi de salmón',
    duration: 90,
    difficulty: 2,
    isFavorite: false,
    mealTime: ['Cena'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['salmón fresco', 'arroz para sushi', 'alga nori'],
      },
      {
        title: 'Condimentos',
        aliments: ['salsa de soja', 'wasabi', 'jengibre encurtido'],
      },
    ],
  },
  {
    id: 4,
    recipeImg:
      'https://cecotec.es/recetas/wp-content/uploads/2022/11/Cecofry_Ensalada-Cesar_ligera_RRSS-1.jpg',
    name: 'Ensalada César',
    duration: 15,
    difficulty: 0,
    isFavorite: true,
    mealTime: ['Almuerzo', 'Cena'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['lechuga romana', 'pollo a la parrilla', 'pan tostado'],
      },
      {
        title: 'Condimentos',
        aliments: ['salsa César', 'queso parmesano', 'ajo'],
      },
    ],
  },
  {
    id: 5,
    recipeImg: 'https://www.annarecetasfaciles.com/files/pollo-al-curry-2.jpg',
    name: 'Pollo al curry',
    duration: 40,
    difficulty: 1,
    isFavorite: true,
    mealTime: ['Comida', 'Cena'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['pollo', 'cebolla', 'curry en polvo'],
      },
      {
        title: 'Condimentos',
        aliments: ['jengibre fresco', 'ajo', 'cilantro'],
      },
    ],
  },
  {
    id: 6,
    recipeImg:
      'https://www.goya.com/media/4124/carne-asada-tacos1.jpg?quality=80',
    name: 'Tacos de carne asada',
    duration: 25,
    difficulty: 0,
    isFavorite: true,
    mealTime: ['Almuerzo', 'Cena'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['carne asada', 'tortillas de maíz', 'cebolla'],
      },
      {
        title: 'Condimentos',
        aliments: ['cilantro', 'lima', 'salsa de tomate'],
      },
    ],
  },
  {
    id: 7,
    recipeImg:
      'https://e00-xlk-cooking-elmundo.uecdn.es/files/article_main_microformat_4_3/uploads/2023/02/28/63fe8443a52bc.jpeg',
    name: 'Pasta carbonara',
    duration: 20,
    difficulty: 0,
    isFavorite: false,
    mealTime: ['Cena'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['espaguetis', 'bacon', 'huevo'],
      },
      {
        title: 'Condimentos',
        aliments: ['queso parmesano', 'pimienta negra'],
      },
    ],
  },
  {
    id: 8,
    recipeImg: 'https://img.freepik.com/fotos-premium/tostadas-melocoton-ricotta-adornadas-nueces-menta-fresca-frambuesas-sobre-tabla-cortar-madera_198639-601.jpg?w=740',
    name: 'Tostadas francesas con frutas',
    duration: 20,
    difficulty: 1,
    isFavorite: false,
    mealTime: ['Desayuno'],
    groupAliments: [
      {
        title: 'Ingredientes principales',
        aliments: ['pan de molde', 'huevos', 'leche', 'frutas variadas (fresas, plátano, arándanos)'],
      },
      {
        title: 'Condimentos',
        aliments: ['canela', 'azúcar', 'miel'],
      },
    ],
  },
];
