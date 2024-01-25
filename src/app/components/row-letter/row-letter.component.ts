import { Component, Input, OnInit } from '@angular/core';
import { LetterCardComponent } from '../letter-card/letter-card.component';
import { State } from '../../utils/constants';
import { BoardStateService } from '../../services/board-state.service';

@Component({
  selector: 'app-row-letter',
  standalone: true,
  imports: [LetterCardComponent],
  templateUrl: './row-letter.component.html',
  styleUrl: './row-letter.component.scss',
})
export class RowLetterComponent implements OnInit {
  states!: State[];
  letters!: string[];
  iterations: number[] = [0];
  @Input() idx: number = 0;

  constructor(private boardState: BoardStateService) {}

  ngOnInit(): void {
    this.states = this.boardState.board[this.idx];
    this.letters = this.boardState.letters[this.idx];
    for(let i = 0; i < this.boardState.m; i++) this.iterations[i] = i;
  }
}
