import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { ChannelsComponent } from './channels/channels.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: 'channels/:id', component: ChannelDetailComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: '', redirectTo: '/channels', pathMatch: 'full'},
  {
    path: '',
    component: NavComponent,
    outlet: 'nav'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
