import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor(private http: Http) { }

  saveStaff(staff: any) {
    return this.http.post(environment.host + 'employees', staff);
  }

  getStaff() {
    return this.http.get(environment.host + 'employees');
  }
}
