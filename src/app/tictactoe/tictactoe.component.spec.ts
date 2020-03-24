import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeComponent } from './tictactoe.component';

describe('TictactoeComponent', () => {
  let component: TictactoeComponent;
  let fixture: ComponentFixture<TictactoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`init should nullify cells`, () => {
    component.init();
    for(var i=0; i<9; i++) {
      expect(component.cells[i]).toBeNull();
    }
  });

  it(`init should start new game`, () => {
    component.init();
    expect(component.gameover).toBeFalse();
  });

  it(`init should start new game with X`, () => {
    component.init();
    expect(component.turn).toEqual('X');
  });

  it(`init should set winner as null`, () => {
    component.init();
    expect(component.winner).toBeNull();
  });

  it(`init should set winner as null`, () => {
    component.changeTurn();
    expect(component.turn).toEqual('0');
  });

  it(`init should set winner as null`, () => {
    component.turn = '0';
    component.changeTurn();
    expect(component.turn).toEqual('X');
  });

  it(`checkWinner should check for winner X :: diagonally`, () => {
    component.cells = ["X", "0", "0", "0", "X", "X", "0", "X", "X"];
    component.checkWinner();
    expect(component.winner).toEqual('X');
  });

  it(`checkWinner should end game post winning`, () => {
    component.cells = ["X", "0", "0", "0", "X", "X", "0", "X", "X"];
    component.checkWinner();
    expect(component.gameover).toBeTrue();
  });

  it(`checkWinner should check for winner 0 :: vertically`, () => {
    component.cells = ["X", "0", "0", "X", "X", "0", null, "X", "0"];
    component.checkWinner();
    expect(component.winner).toEqual('0');
  });

  it(`checkWinner should set winner as empty string , if match is draw`, () => {
    component.cells = ["X", "0", "X", "0", "0", "X", "X", "X", "0"];
    component.checkWinner();
    expect(component.winner).not.toBe('X');
  });

  it(`checkWinner should set winner as empty string , if match is draw`, () => {
    component.cells = ["X", "0", "X", "0", "0", "X", "X", "X", "0"];
    component.checkWinner();
    expect(component.winner).not.toBe('0');
  });

  it(`checkWinner should end the game , if match is draw`, () => {
    component.cells = ["X", "0", "X", "0", "0", "X", "X", "X", "0"];
    component.checkWinner();
    expect(component.gameover).toBeTrue();
  });

  it(`checkWinner should not end the game , if any cell is null`, () => {
    component.cells = ["X", "0", "X", "0", "0", "X", "X", "X", null];
    component.checkWinner();
    expect(component.gameover).toBeFalse();
  });

});
