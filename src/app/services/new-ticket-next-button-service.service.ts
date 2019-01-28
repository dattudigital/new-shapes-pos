import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewTicketNextButtonServiceService {

  constructor(private http:HttpClient) { }
  public getCategory() {
    return this.http.get(environment.host + 'categorys')
  }
  public getMembership() {
    return this.http.get(environment.host + 'memberships')
  }
  public getPackage() {
    return this.http.get(environment.host + 'packages')
  }

}
