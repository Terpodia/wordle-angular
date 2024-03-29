import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterCardComponent } from './letter-card.component';

describe('LetterCardComponent', () => {
  let component: LetterCardComponent;
  let fixture: ComponentFixture<LetterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
