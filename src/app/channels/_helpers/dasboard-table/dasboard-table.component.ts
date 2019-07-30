import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IChannel } from 'src/app/models/channel';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ChannelsService } from '../../../channels.service';

@Component({
  selector: 'app-dasboard-table',
  templateUrl: './dasboard-table.component.html',
  styleUrls: ['./dasboard-table.component.css']
})
export class DasboardTableComponent implements OnInit {

  displayedColumns: string[] = ['rank', 'grade', 'name', 'video_uploads', 'subscribers', 'video_views'];
  dataSource: MatTableDataSource<IChannel>;
  channels: IChannel[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private channelsService: ChannelsService
  ) { }

  ngOnInit() {
    this.getChannels();
    console.log(this.dataSource)
  }

  getChannels(): void {
    //TODO: pageNo, noOfItems;
    this.channelsService.getAllChannels({ page: 0, items: 20 })
    .subscribe((res) => {
      console.log(res);
      //this.total = parseInt(res.headers.get('X-Total-Count'));
      console.log(res.headers.get('x-total-count'));
      this.channels = res.body;
      this.dataSource = new MatTableDataSource(this.channels);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
