import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../channels.service';
import { IChannel } from '../models/channel';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: IChannel[];

  loading = false;
  total = 0;
  page = 1;
  limit = 20;

  constructor(
    private channelsService: ChannelsService
  ) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels(): void {
    this.loading = true;
    this.channelsService.getAllChannels({ page: this.page, limit: this.limit })
    .subscribe(res => {
      this.total = res.headers;
      this.channels = res.channels;
      this.loading = false;
    });
  }

}
