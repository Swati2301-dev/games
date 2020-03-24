import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Game } from '../game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  gamesList = [
    {id: ['/1'], name: 'Tic-Tac-Toe', value: 'tictactoe'},
    {id: ['/2'], name: 'Game2', value: 'game2'},
    {id: ['/3'], name: 'Game3', value: 'game3'}
  ];

  ngOnInit(): void {
  }

  saveSelectedGame(game: Game) {
    this.sharedService.setSelectedGame(game);
  }

}
