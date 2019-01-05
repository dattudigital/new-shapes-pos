import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BussinessSettingsService {
  
  constructor(private http: Http) { }
  public editBussinessAddress(data: any) {
    return this.http.post(environment.host + 'locations', data)
  }

  public getBussinessAddress() {
    return this.http.get(environment.host + 'locations');
  }
  public editBussinessdays(data: any) {
    return this.http.post(environment.host + 'business', data)
  }

  public getBussinessdays() {
    return this.http.get(environment.host + 'business');
  }
  public editContactAddress(data: any) {
    return this.http.post(environment.host + 'contact-logo-taxs', data)
  }
  public getContactAddress() {
    return this.http.get(environment.host + 'contact-logo-taxs');
  }
  
}
