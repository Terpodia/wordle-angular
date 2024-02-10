import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { HttpClient } from '@angular/common/http';
import { GameStateService } from './services/game-state.service';

const API_URL = 'https://random-word-api.herokuapp.com/word?lang=es&';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'wordle-angular';

  constructor(
    private readonly httpClient: HttpClient,
    private gameStateServide: GameStateService
  ) {}

  ngOnInit(): void {
    this.httpClient.get<string>(API_URL + 'length=5').subscribe((item) => {
      this.gameStateServide.secretWord = item.toString();
      this.gameStateServide.secretWord = this.gameStateServide.secretWord
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      console.log(this.gameStateServide.secretWord);
    });
  }
}
