import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  wordSize: number = 5;
  tries: number = 6;

  constructor() {}
}
