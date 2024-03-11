import { QuestionSurveyInterface } from "./survey.interface";

export const surveyMock: QuestionSurveyInterface[] = [
  {
    questions: '¿Cómo ha sido su experiencia general desde su última visita?',
    answers: {
      firstOption: 0,
      secondOption: 1,
      thirdOption: 2
    }
  },
  {
    questions: '¿Ha notado alguna mejoría en sus síntomas desde el último seguimiento?',
    answers: {
      firstOption: 0,
      secondOption: 1,
      thirdOption: 2
    }
  },
  {
    questions: '¿Cómo calificaría su nivel de molestia o dolor actualmente?',
    answers: {
      firstOption: 0,
      secondOption: 1,
      thirdOption: 2
    }
  },
  {
    questions: '¿Ha seguido las recomendaciones médicas y ha estado tomando su medicación según lo indicado?',
    answers: {
      firstOption: 0,
      secondOption: 1,
      thirdOption: 2
    }
  }
]