import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LetterCardComponent } from './components/letter-card/letter-card.component';
import { RowLetterComponent } from './components/row-letter/row-letter.component';
import { BoardStateService } from './services/board-state.service';
import { WordleInputHandlerComponent } from './components/wordle-input-handler/wordle-input-handler.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LetterCardComponent,
    RowLetterComponent,
    WordleInputHandlerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'wordle-angular';
  iterations = new Array(5);

  constructor(private boardState: BoardStateService) {}
  ngOnInit(): void {
    for (let i = 0; i < 5; i++) this.iterations[i] = i;
    this.boardState.setSize(5, 5);
    console.log(this.boardState.board);
    console.log(this.boardState.letters);
  }
}
