import { NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-letter-card',
  standalone: true,
  imports: [NgClass, UpperCasePipe],
  templateUrl: './letter-card.component.html',
  styleUrl: './letter-card.component.scss',
})
export class LetterCardComponent {
  @Input() state:
    | 'empty'
    | 'non-empty'
    | 'miss-place'
    | 'not-belong'
    | 'success' = 'empty';

  readonly letterState = {
    empty: 'empty',
    'non-empty': 'non-empty',
    'miss-place': 'miss-place',
    'not-belong': 'not-belong',
    success: 'success',
  };

  @Input() letter: string = "";
}
