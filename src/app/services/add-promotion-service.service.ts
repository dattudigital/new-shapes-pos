import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPromotionServiceService {

  constructor(private http: Http) { }

  public addPromotionPost(data: any) {
    return this.http.post(environment.host + 'promotions', data)
  }

  public editPromotionGet() {
    return this.http.get(environment.host + 'promotions');
  }

}
