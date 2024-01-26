import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowLetterComponent } from './row-letter.component';

describe('RowLetterComponent', () => {
  let component: RowLetterComponent;
  let fixture: ComponentFixture<RowLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
