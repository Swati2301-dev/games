import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public game: Game;

  getSelectedGame() {
    	return this.game;
  }

  setSelectedGame(game) {
    this.game = game;
  }
}
