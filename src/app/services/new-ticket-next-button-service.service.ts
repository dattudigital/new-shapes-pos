import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewTicketNextButtonServiceService {

  constructor(private http: Http) { }
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
