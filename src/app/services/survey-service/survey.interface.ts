export interface QuestionSurveyInterface {
    questions: string;
    answers: {
      firstOption: number;
      secondOption: number;
      thirdOption: number;
    };
  }