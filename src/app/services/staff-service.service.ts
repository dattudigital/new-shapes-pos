import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor(private http:HttpClient) { }

  saveStaff(staff: any) {
    return this.http.post(environment.host + 'employees', staff);
  }

  getStaff() {
    return this.http.get(environment.host + 'employees');
  }
}
