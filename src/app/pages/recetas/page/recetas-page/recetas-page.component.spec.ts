import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasPageComponent } from './recetas-page.component';

describe('RecetasPageComponent', () => {
  let component: RecetasPageComponent;
  let fixture: ComponentFixture<RecetasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetasPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
