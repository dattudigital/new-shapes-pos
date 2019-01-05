import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  constructor(private http: Http) { }
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
