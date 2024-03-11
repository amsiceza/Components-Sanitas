import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgressComponent } from './form-progress/form-progress.component';
import { QuestionSurveyComponent } from './question-survey/question-survey.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormProgressComponent, QuestionSurveyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormProgressComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

  
})
export class SurveyProgressModule { }
