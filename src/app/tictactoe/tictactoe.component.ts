import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  public title = '';
  public cells: string[] = [];
  public turn: string = 'X';
  public gameover = false;
  public winner = null;

  ngOnInit() :void{
    this.title = this.sharedService.getSelectedGame() ? this.sharedService.getSelectedGame().name : 'Tic-Tac-Toe';
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
  }

  init() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'X';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(idx: number) {
    if (!this.gameover) {
      if (this.cells[idx] === null) {
        this.cells[idx] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }

    }
  }

  changeTurn() {
    if (this.turn === 'X') {
      this.turn = '0';
    } else {
      this.turn = 'X';
    }
  }

  checkWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      if (this.cells[line[0]] === this.cells[line[1]] && this.cells[line[1]] === this.cells[line[2]] && this.cells[line[0]] !== null) {
        this.gameover = true;
        this.winner = this.cells[line[0]];
        return;
      }
    }

    let occupy = 0;
    this.cells.forEach((e) => { occupy += (e !== null ? 1 : 0) });
    if (occupy === 9) {
      this.gameover = true;
      this.winner = ' ';
    }
  }

}
