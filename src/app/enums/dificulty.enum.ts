export interface DificultyInfo {
    text: string;
    class: string;
}

export const DIFICULTY: { [key: string]: DificultyInfo } = {
    0: { text: "Fácil", class: "dificulty--easy" },
    1: {text: "Media", class: "dificulty--medium"},
    2: {text: "Difícil", class: "dificulty--hard"}
};