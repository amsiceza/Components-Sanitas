export interface NutritionRecipeCardConfig {

id: number;
backgroundImage: string;
frontTitle: string;
difficulty: number;
duration: number;
mealTime: string[];
isFavorite: boolean;
backTitle: string;
backInfo: backInfoData[];

}
interface backInfoData {
    title: string;
    aliments: string[];
}