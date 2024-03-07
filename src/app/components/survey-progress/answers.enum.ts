export interface AnswerInfo {
    icon: string;
    value: string;
}

export const ANSWERS: { [key: string]: AnswerInfo } = {
    0: { icon: "assets/icons/encuesta-respuestas/sad.svg", value: "Poco" },
    1: { icon: "assets/icons/encuesta-respuestas/normal.svg", value: "Normal"},
    2: { icon: "assets/icons/encuesta-respuestas/happy.svg", value: "Mucho"}
};