import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { ChannelsComponent } from './channels/channels.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DasboardTableComponent } from './channels/_helpers/dasboard-table/dasboard-table.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './nav/nav.component';
import { ChannelToolsComponent } from './channels/_helpers/channel-tools/channel-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelDetailComponent,
    ChannelsComponent,
    PaginationComponent,
    DasboardTableComponent,
    NavComponent,
    ChannelToolsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
