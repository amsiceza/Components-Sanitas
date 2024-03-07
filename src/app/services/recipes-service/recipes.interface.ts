export interface RecipesInterface {
    recipeImg: string,
    name: string,
    duration: number,
    difficulty: number,
    isFavorite: string,
    mealTime: string[]
    groupAliments: GroupAliments[]
}

export interface GroupAliments{
    title: string,
    aliments: string[]
}