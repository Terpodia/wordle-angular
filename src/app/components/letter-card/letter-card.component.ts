import { NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { State } from '../../utils/constants';

@Component({
  selector: 'app-letter-card',
  standalone: true,
  imports: [NgClass, UpperCasePipe],
  templateUrl: './letter-card.component.html',
  styleUrl: './letter-card.component.scss',
})
export class LetterCardComponent {
  @Input() state: State = 'empty';

  readonly letterState = {
    empty: 'empty',
    'non-empty': 'non-empty',
    'miss-place': 'miss-place',
    'not-belong': 'not-belong',
    success: 'success',
  };

  @Input() letter: string = "";
}
