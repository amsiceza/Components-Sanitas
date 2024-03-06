import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-encuesta',
  templateUrl: './question-survey.component.html',
  styleUrl: './question-survey.component.scss'
})
export class QuestionSurveyComponent {
  @Input() pregunta: string | undefined;
  imagenAzulIndex: number = -1;

  toggleAzul(index: number) {
    if (this.imagenAzulIndex === index) {
      this.imagenAzulIndex = -1;
    } else {
      this.imagenAzulIndex = index;
    }
  }
}
