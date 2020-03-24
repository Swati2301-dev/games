import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedService } from '../shared.service';
import { Game } from '../game';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const game: Game = {id: ['/1'], name: 'Tic-Tac-Toe', value: 'tictactoe'};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected game', () => {
    component.saveSelectedGame(game);
    const selectedGame = component.sharedService.getSelectedGame();
    expect(selectedGame.name).toEqual('Tic-Tac-Toe');
  });

});
