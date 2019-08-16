import { Injectable } from '@angular/core';
import { IChannel } from './models/channel';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

  getAllChannels(req?: any, searchString?: string): Observable<HttpResponse<IChannel[]>> {
    let searchQueryText: string;
    if(searchString !== null || searchString !== undefined) {
      searchQueryText = '?search=' + searchString;    return this.http.get<IChannel[]>('http://localhost:8080/channels', { params: req, observe: 'response' });
      return this.http.get<IChannel[]>('http://localhost:8080/channels' + searchQueryText, { params: req, observe: 'response' });
    }
    return this.http.get<IChannel[]>('http://localhost:8080/channels', { params: req, observe: 'response' });
  }
}
