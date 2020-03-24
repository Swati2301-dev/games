import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { CellsComponent } from './cells/cells.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TictactoeComponent,
    CellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
