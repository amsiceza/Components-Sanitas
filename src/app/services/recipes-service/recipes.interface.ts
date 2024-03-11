export interface RecipesInterface {
    id:number,
    recipeImg: string,
    name: string,
    duration: number,
    difficulty: number,
    isFavorite: boolean,
    mealTime: string[]
    groupAliments: GroupAliments[]
}

export interface GroupAliments{
    title: string,
    aliments: string[]
}