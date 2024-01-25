import { OnInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { filter, fromEvent } from 'rxjs';
import { BoardStateService } from '../../services/board-state.service';

@Component({
  selector: 'app-wordle-input-handler',
  standalone: true,
  imports: [],
  templateUrl: './wordle-input-handler.component.html',
  styleUrl: './wordle-input-handler.component.scss',
})
export class WordleInputHandlerComponent implements OnInit {
  constructor(private boardState: BoardStateService, @Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngOnInit(): void {
    if(!isPlatformBrowser(this.platformId)) return;

    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(filter((event) => this.isValidKey(event.key)))
      .subscribe((event) => {
        if(this.boardState.currentRow >= this.boardState.n) return;
        if(event.key === 'Enter'){
          if(this.boardState.currentCol < this.boardState.m) return;
          this.boardState.currentRow++;
          this.boardState.currentCol = 0;
          return;
        }
        if(event.key === 'Backspace'){
          if(this.boardState.currentCol === 0) return;
          this.boardState.currentCol--;
          this.boardState.board[this.boardState.currentRow][this.boardState.currentCol] = 'empty';
          this.boardState.letters[this.boardState.currentRow][this.boardState.currentCol] = '';
          return;
        }
        if(this.boardState.currentCol >= this.boardState.m) return;
        this.boardState.board[this.boardState.currentRow][this.boardState.currentCol] = 'non-empty';
        this.boardState.letters[this.boardState.currentRow][this.boardState.currentCol] = event.key;
        this.boardState.currentCol++;
      });
  }
  private isValidKey(key: string): boolean {
    return /^[a-zA-Z]$/.test(key) || key === 'Enter' || key === 'Backspace';
  }
}
