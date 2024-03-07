export interface DifficultyInfo {
    text: string;
    class: string;
}

export const DIFFICULTY: { [key: string]: DifficultyInfo } = {
    0: { text: "Fácil", class: "difficulty--easy" },
    1: {text: "Media", class: "difficulty--medium"},
    2: {text: "Difícil", class: "difficulty--hard"}
};