export interface DifficultyInfo {
    text: string;
    class: string;
}

export const DIFFICULTY: { [key: string]: DifficultyInfo } = {
    0: { text: "Fácil", class: "easy" },
    1: {text: "Media", class: "medium"},
    2: {text: "Difícil", class: "hard"}
};