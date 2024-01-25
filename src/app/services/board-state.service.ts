import { Injectable, Input } from '@angular/core';
import { State } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {
  n : number = 5;  
  m : number = 5;
  currentRow: number = 0;
  currentCol: number = 0;

  board: State[][] = [['empty']];
  letters: string[][] = [['']]

  constructor() { }

  setSize(_n: number, _m: number) {
    this.n = _n, this.m = _m;
    for(let i = 0; i < this.n; i++) {
      this.board[i] = ['empty'];
      this.letters[i] = [''];
      for(let j = 0; j < this.m; j++) {
        this.board[i][j] = 'empty';
        this.letters[i][j] = '';
      }
    }
  }
}
