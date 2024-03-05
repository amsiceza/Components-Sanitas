import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecetasComponent } from './card-recetas.component';

describe('CardRecetasComponent', () => {
  let component: CardRecetasComponent;
  let fixture: ComponentFixture<CardRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRecetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
