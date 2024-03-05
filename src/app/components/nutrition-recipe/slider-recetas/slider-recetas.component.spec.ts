import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRecetasComponent } from './slider-recetas.component';

describe('SliderRecetasComponent', () => {
  let component: SliderRecetasComponent;
  let fixture: ComponentFixture<SliderRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderRecetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
