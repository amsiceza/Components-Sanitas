import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { preguntasProgreso } from '../../../mocks/encuesta-mock';


@Component({
  selector: 'app-form-progreso',
  templateUrl: './form-progreso.component.html',
  styleUrl: './form-progreso.component.scss',
})
export class FormProgresoComponent implements OnInit {
  encuestaForm!: FormGroup;
  preguntas: string[] = preguntasProgreso

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.encuestaForm = this.formBuilder.group({});
    preguntasProgreso.forEach((pregunta, index) => {
      this.encuestaForm?.addControl(
        'pregunta' + index,
        this.formBuilder.control('', Validators.required)
      );
    });
  }

  setResponse(response: string, index: number) {
    this.encuestaForm.get('pregunta' + index)?.setValue(response);
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
