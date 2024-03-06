export interface DificultyInfo {
    text: string;
    class: string;
}

export const DIFICULTY: { [key: string]: DificultyInfo } = {
    0: { text: "Fácil", class: "easy" },
    1: {text: "Media", class: "medium"},
    2: {text: "Difícil", class: "hard"}
};