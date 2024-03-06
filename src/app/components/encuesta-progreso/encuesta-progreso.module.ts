import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProgresoComponent } from './form-progreso/form-progreso.component';
import { QuestionEncuestaComponent } from './question-encuesta/question-encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormProgresoComponent, QuestionEncuestaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormProgresoComponent,
  ]
})
export class EncuestaModule { }
