import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANSWERS, AnswerInfo } from '../answers.enum';

@Component({
  selector: 'app-question-encuesta',
  templateUrl: './question-survey.component.html',
  styleUrl: './question-survey.component.scss'
})
export class QuestionSurveyComponent {
  @Input() question: string | undefined;
  @Output() responseSelected = new EventEmitter<string>();

  imagenAzulIndex: number = -1;

  public answerTemplate: any

  ngOnInit(): void {
    this.answerTemplate = ANSWERS
  }

  toggleAzul(index: number) {
    const selectedAnswer = this.answerTemplate[index].value;
    this.responseSelected.emit(selectedAnswer);
    if (this.imagenAzulIndex === index) {
      this.imagenAzulIndex = -1;
    } else {
      this.imagenAzulIndex = index;
    }
  }
}
