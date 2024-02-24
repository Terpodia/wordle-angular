import { Component, Input } from '@angular/core';
import { GameActionsService } from '../../services/game-actions.service';

@Component({
  selector: 'app-btn-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './btn-keyboard.component.html',
  styleUrl: './btn-keyboard.component.scss'
})
export class BtnKeyboardComponent {
  @Input() value: string = "";

  constructor(private gameActions: GameActionsService){}

  handleClick(){
    if(this.value === 'Enter') this.gameActions.submitWord();
    else if(this.value === 'Backspace') this.gameActions.deleteLetter();
    else this.gameActions.putLetter(this.value);
  }
}
