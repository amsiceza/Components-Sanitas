import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-encuesta',
  templateUrl: './question-encuesta.component.html',
  styleUrl: './question-encuesta.component.scss'
})
export class QuestionEncuestaComponent {
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
