import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  { path: '', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'players', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'status', redirectTo: 'status/game/1', pathMatch: 'full' },
  { path: 'status/game', redirectTo: 'status/game/1', pathMatch: 'full' },
  { path: 'status/game/:id', component: StatusComponent, pathMatch: 'full' },
  { path: 'players', component: PlayersComponent,   children: [
    { path: 'list', component: ListComponent },
    { path: 'addplayer', component: AddplayerComponent }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
