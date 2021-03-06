import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';


const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
{ path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: ':id',
  component: TictactoeComponent
},
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
