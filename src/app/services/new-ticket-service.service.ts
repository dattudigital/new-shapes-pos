import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewTicketServiceService {

  constructor(private http:HttpClient) { }
  public saveNewCustomer(data: any) {
    return this.http.post(environment.host + 'users', data)
  }
  public getMembershipInfo(id: any) {
    return this.http.get(environment.host + 'sales/visit/' + id)
  }
  public getVisitInfo(id: any) {
    return this.http.get(environment.host + 'sales/visit/' + id)
  }
  public getAllInfo(id: any) {
    return this.http.get(environment.host + 'sales/all-history/' + id)
  }
  public getProductInfo(id: any) {
    return this.http.get(environment.host + 'sales/product-history/' + id)
  }
  public getServiceInfo(id: any) {
    return this.http.get(environment.host + 'sales/service-history/' + id)
  }
  public getCustomerSearch(id: any) {
    return this.http.get(environment.host + 'users/search/' + id)
  }
}
