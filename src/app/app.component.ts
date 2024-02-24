import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { GridComponent } from './components/grid/grid.component';
import { HttpClient } from '@angular/common/http';
import { GameStateService } from './services/game-state.service';
import { BtnKeyboardComponent } from './components/btn-keyboard/btn-keyboard.component';
import { keyboard } from './constants/keyboard';

const API_URL = 'https://random-word-api.herokuapp.com/word?lang=es&';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridComponent, BtnKeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'wordle-angular';

  readonly keyboard = keyboard;

  constructor(
    private readonly httpClient: HttpClient,
    private gameState: GameStateService
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<[string]>(API_URL + 'length=5')
      .pipe(
        map((item) =>
          item[0]
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
        )
      )
      .subscribe((item) => {
        this.gameState.secretWord = item;
        console.log(item);
      });
  }
}
