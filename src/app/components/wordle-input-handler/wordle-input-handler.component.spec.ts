import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleInputHandlerComponent } from './wordle-input-handler.component';

describe('WordleInputHandlerComponent', () => {
  let component: WordleInputHandlerComponent;
  let fixture: ComponentFixture<WordleInputHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleInputHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordleInputHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
