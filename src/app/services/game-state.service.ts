import { Injectable } from '@angular/core';
import { RowLetterComponent } from '../components/row-letter/row-letter.component';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  wordSize: number = 5;
  tries: number = 6;
  currentRow: number = 0;
  currentCol: number = 0;
  hasEnded: boolean = false;
  secretWord: string = 'words';
  rows: RowLetterComponent[] = [];

  constructor() {}
}
