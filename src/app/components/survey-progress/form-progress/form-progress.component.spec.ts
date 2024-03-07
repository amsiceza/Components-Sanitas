import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormProgressComponent } from './form-progress.component';


describe('FormProgresoComponent', () => {
  let component: FormProgressComponent;
  let fixture: ComponentFixture<FormProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
