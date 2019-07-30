import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../channels.service';
import { IChannel } from '../models/channel';
import { HttpResponse } from '@angular/common/http';

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

  searchField: string;

  constructor(
    private channelsService: ChannelsService
  ) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels(): void {
    this.loading = true;
    this.channelsService.getAllChannels({ page: this.page, items: this.limit })
    .subscribe((res) => {
      console.log(res);
      this.total = parseInt(res.headers.get('X-Total-Count'));
      console.log(res.headers.get('x-total-count'));
      this.channels = res.body;
      this.loading = false;
    });
  }

}
