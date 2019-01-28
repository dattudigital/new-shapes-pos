import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  constructor(private http:HttpClient) { }
  getManager() {
    return this.http.get(environment.host + 'categorys')
  }
  getInactiveMembership() {
    return this.http.get(environment.host + 'memberships/active-or-inactive/0')
  }
  getaddpackage(){
    return this.http.get(environment.host + 'services');
  }
}
