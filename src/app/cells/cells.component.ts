import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css']
})
export class CellsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }

}
