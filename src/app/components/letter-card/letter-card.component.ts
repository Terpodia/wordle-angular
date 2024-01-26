import { NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ILetter } from '../../interfaces/letter.interface';

const LETTER_STATE = {
  empty: 'empty',
  'non-empty': 'non-empty',
  'miss-place': 'miss-place',
  'not-belong': 'not-belong',
  success: 'success',
};

@Component({
  selector: 'app-letter-card',
  standalone: true,
  imports: [NgClass, UpperCasePipe],
  templateUrl: './letter-card.component.html',
  styleUrl: './letter-card.component.scss',
})
export class LetterCardComponent {
  @Input() letter: ILetter = {
    value: '',
    state: 'empty',
  };

  readonly letterState = LETTER_STATE;
}
