export interface QuestionSurveyInterface {
    questions: string[];
    answers: {
      sadOption: number;
      normalOption: number;
      happyOption: number;
    };
  }