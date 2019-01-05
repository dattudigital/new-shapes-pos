import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewTicketNextButtonInvoiceServiceService {

  constructor(private http: Http) { }
  public getService() {
    return this.http.get(environment.host + 'categorys')
  }
  public getProduct() {
    return this.http.get(environment.host + 'products')
  }
  public getPackage() {
    return this.http.get(environment.host + 'packages')
  }
  public getMembership() {
    return this.http.get(environment.host + 'memberships')
  }
  public getCategory() {
    return this.http.get(environment.host + 'categorys')
  }
}
