import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';
import { LetterCardComponent } from '../letter-card/letter-card.component';
import { ILetter } from '../../interfaces/letter.interface';

@Component({
  selector: 'app-row-letter',
  standalone: true,
  imports: [LetterCardComponent],
  templateUrl: './row-letter.component.html',
  styleUrl: './row-letter.component.scss',
})
export class RowLetterComponent implements OnInit {
  private wordSize!: number;
  letters: ILetter[] = [];

  constructor(private readonly gameState: GameStateService) {}

  ngOnInit(): void {
    this.wordSize = this.gameState.wordSize;
    for (let i = 0; i < this.wordSize; i++) {
      this.letters[i] = {
        value: '',
        state: 'empty',
      };
    }
  }

  get(): string {
    return this.letters.map((letter) => letter.value).join('');
  }

  put(letter: string): void {
    this.letters[this.gameState.currentCol] = {
      value: letter,
      state: 'non-empty',
    };
  }

  delete(): void {
    this.letters[this.gameState.currentCol - 1] = {
      value: '',
      state: 'empty',
    };
  }
}
