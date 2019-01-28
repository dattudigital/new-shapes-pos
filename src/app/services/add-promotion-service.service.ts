import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPromotionServiceService {

  constructor(private http:HttpClient) { }

  public addPromotionPost(data: any) {
    return this.http.post(environment.host + 'promotions', data)
  }

  public editPromotionGet() {
    return this.http.get(environment.host + 'promotions');
  }

}
