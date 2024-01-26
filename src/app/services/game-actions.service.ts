import { Injectable } from '@angular/core';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class GameActionsService {
  constructor(private gameState: GameStateService) {}

  submitWord(): void {
    if (this.gameState.hasEnded) return;
    if (this.gameState.currentCol < this.gameState.wordSize) return;
    this.gameState.currentCol = 0;
    this.gameState.currentRow++;
    const maxTriesReached = this.gameState.currentRow >= this.gameState.tries;
    const secretWordMatch =
      this.gameState.secretWord ===
      this.gameState.rows[this.gameState.currentRow].get();
      this.gameState.hasEnded = maxTriesReached || secretWordMatch;
  }

  deleteLetter(): void {
    if (this.gameState.hasEnded) return;
    if (this.gameState.currentCol == 0) return;
    this.gameState.rows[this.gameState.currentRow].delete();
    this.gameState.currentCol--;
  }

  putLetter(letter: string): void {
    if (this.gameState.hasEnded) return;
    if (this.gameState.currentCol >= this.gameState.wordSize) return;
    this.gameState.rows[this.gameState.currentRow].put(letter);
    this.gameState.currentCol++;
  }
}
