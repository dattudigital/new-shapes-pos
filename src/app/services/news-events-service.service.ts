import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsEventsServiceService {

  constructor(private http: Http) { }

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
