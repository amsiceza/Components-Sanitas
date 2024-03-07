import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { questionAnswersMock } from '../mock';
import { QuestionSurveyInterface } from '../question-survey.interface';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-form-progreso',
  templateUrl: './form-progress.component.html',
  styleUrl: './form-progress.component.scss',
})
export class FormProgressComponent implements OnInit {
  encuestaForm!: FormGroup;
  config: QuestionSurveyInterface = questionAnswersMock

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.encuestaForm = this.formBuilder.group({});
    this.config.questions.forEach((question, index) => {
      this.encuestaForm?.addControl(
        'question' + index,
        this.formBuilder.control('', Validators.required)
      );
    });
  }

  setResponse(response: string, index: number) {
    this.encuestaForm.get('question' + index)?.setValue(response);
  }

  onSubmit() {
    if (this.encuestaForm?.valid) {
      console.log('Formulario válido:', this.encuestaForm.value);
      this.encuestaForm.reset();
    } else {
      console.log('Formulario inválido. Por favor, complete todas las preguntas.');
    }
  }
}
