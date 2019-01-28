import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsEventsServiceService {

  constructor(private http:HttpClient) { }

  public newsEventPost(data: any) {
    return this.http.post(environment.host + 'news-events', data)
  }
  public getTopMessage() {
    return this.http.get(environment.host + 'newstop-messages');
  }
  public editTopMessage(data: any) {
    return this.http.post(environment.host + 'newstop-messages', data);
  }

}
