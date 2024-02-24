import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnKeyboardComponent } from './btn-keyboard.component';

describe('BtnKeyboardComponent', () => {
  let component: BtnKeyboardComponent;
  let fixture: ComponentFixture<BtnKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnKeyboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
