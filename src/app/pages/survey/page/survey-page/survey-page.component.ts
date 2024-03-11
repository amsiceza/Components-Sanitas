import { Component } from '@angular/core';
import { SurveyService } from '../../../../services/survey-service/survey.service';
import { QuestionSurveyInterface } from '../../../../services/survey-service/survey.interface';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrl: './survey-page.component.scss'
})
export class SurveyPageComponent {

  surveyMock: QuestionSurveyInterface[] | undefined

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.fetchQuestions()
    this.surveyService.questions$.subscribe(questions => this.surveyMock = questions)
  }  
}
