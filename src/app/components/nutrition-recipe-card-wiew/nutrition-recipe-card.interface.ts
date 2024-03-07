export interface NutritionRecipeCardConfig {

backgroundImage: string;
frontTitle: string;
dificulty: number;
duration: number;
isFavorite: boolean;
backTitle: string;
backInfo: backInfoData[];

}
interface backInfoData {
    title: string;
    subtitle: string[];
}