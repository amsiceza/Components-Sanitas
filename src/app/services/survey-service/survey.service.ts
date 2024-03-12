import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionSurveyInterface } from './survey.interface';
import { surveyMock } from './survey.mock';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private questionsSubject = new BehaviorSubject<QuestionSurveyInterface[]>([]);
  public questions$ = this.questionsSubject.asObservable();

  private currentQuestions: QuestionSurveyInterface[] = []

  constructor() { }

  fetchQuestions(){
    this.currentQuestions = surveyMock;
    this.questionsSubject.next(this.currentQuestions)
  }

  submitSurvey(data: object){
    alert('Simulando envío de datos por POST: ' + JSON.stringify(data));
    alert('¡Datos enviados con éxito!');
  }




}
