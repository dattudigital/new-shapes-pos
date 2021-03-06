import { Injectable } from '@angular/core';
// import { Membership } from '../model/membership.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MembershipServiceService {

  constructor(private http: HttpClient) { }
  getMembership() {
    return this.http.get(environment.host + 'memberships');
  }
  editMembership(data: any) {
    return this.http.post(environment.host + 'memberships', data);
  }
  getCategoryList() {
    return this.http.get(environment.host + 'categorys');
  }
  getSub_CategoryList(id: number) {
    return this.http.get(environment.host + 'sub-categorys/' + id);
  }
  saveMembershipDetails(data: any) {
    return this.http.post(environment.host + 'memberships', data);
  }
}
