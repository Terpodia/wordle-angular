import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { RowLetterComponent } from '../row-letter/row-letter.component';
import { GameStateService } from '../../services/game-state.service';
import { GameActionsService } from '../../services/game-actions.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [RowLetterComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  tries: number = 0;

  constructor(
    private readonly gameState: GameStateService,
    private readonly gameActions: GameActionsService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  ngOnInit(): void {
    this.tries = this.gameState.tries;
    this.listenerEvents();
  }

  private listenerEvents(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromEvent<KeyboardEvent>(document, 'keyup').subscribe((event) => {
      if (event.key === 'Enter') this.gameActions.submitWord();
      else if (event.key === 'Backspace') this.gameActions.deleteLetter();
      else if (this.isAlphabetLetter(event.key))
        this.gameActions.putLetter(event.key);
    });
  }

  private isAlphabetLetter(key: string): boolean {
    return /^[a-zA-Z]$/.test(key);
  }
}
