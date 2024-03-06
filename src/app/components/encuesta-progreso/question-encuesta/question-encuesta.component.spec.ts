import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEncuestaComponent } from './question-encuesta.component';

describe('QuestionEncuestaComponent', () => {
  let component: QuestionEncuestaComponent;
  let fixture: ComponentFixture<QuestionEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionEncuestaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
