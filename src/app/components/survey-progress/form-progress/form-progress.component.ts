import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../../../services/survey-service/survey.service';
import { QuestionSurveyInterface } from '../../../services/survey-service/survey.interface';


@Component({
  selector: 'app-form-progreso',
  templateUrl: './form-progress.component.html',
  styleUrl: './form-progress.component.scss',
})
export class FormProgressComponent implements OnInit {
  encuestaForm!: FormGroup;
  @Input() config: QuestionSurveyInterface[] | undefined

  constructor(private formBuilder: FormBuilder, private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.encuestaForm = this.formBuilder.group({});
    this.config?.forEach((question, index) => {
      this.encuestaForm?.addControl(
        "question" + index,
        this.formBuilder.control('', Validators.required)
      );
    });
  }

  setResponse(response: any, index: number) {
    this.encuestaForm.get('question' + index)?.setValue(response.answer);
  }

  onSubmit() {
    if (this.encuestaForm?.valid) {
      this.surveyService.submitSurvey(this.encuestaForm.value)
      this.encuestaForm.reset();
    } else {
      console.log('Formulario inválido. Por favor, complete todas las preguntas.');
    }
  }
}
