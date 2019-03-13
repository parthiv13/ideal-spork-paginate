import { Injectable } from '@angular/core';
import { IChannel } from './models/channel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './models/Constants';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  constants = Constants;
  constructor(
    private http: HttpClient
  ) { }

  getAllChannels(req?: any) {
    return this.http.get('http://localhost:8080/channels', { params: req });
  }
}
