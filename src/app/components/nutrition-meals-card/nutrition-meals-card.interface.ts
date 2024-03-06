export interface NutritionMealsCardConfig {
    frontImage: string,
    backImage: string,
    frontHeader: {
           title: string,
           subtitle?: string,
       },
    backTitle: string,
    frontList: string[],
    backList: string[],
}