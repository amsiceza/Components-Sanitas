import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgresoComponent } from './form-progress.component';

describe('FormProgresoComponent', () => {
  let component: FormProgresoComponent;
  let fixture: ComponentFixture<FormProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProgresoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
