import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChannelsService } from '../channels.service';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.css']
})
export class ChannelDetailComponent implements OnInit {
  channel: any;
  constructor(
    route: ActivatedRoute
  ) {
    this.channel = route.data.subscribe(result => result);
  }

  ngOnInit() {
    
  }

}
