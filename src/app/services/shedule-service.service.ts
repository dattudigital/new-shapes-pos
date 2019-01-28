import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SheduleServiceService {

  constructor(private http:HttpClient) { }

  getEmployee() {
    return this.http.get(environment.host + 'employees');
  }
  getSelectedEmployee(id: number) {
    return this.http.get(environment.host + 'employees/' + id);
  }
  getAllLocations() {
    return this.http.get(environment.host + 'branches');
  }
  getStaffByLocation(id: number) {
    return this.http.get(environment.host + 'branch-emp/' + id);
  }
  getBranchDetail(id: number) {
    return this.http.get(environment.host + 'branches/' + id);
  }
  getStaffAppointments(id1: number, id2: number) {
    return this.http.get(environment.host + 'emp-branch-appt/' + id1 + '/' + id2);
  }
  getEmpAppointments(url: any) {
    return this.http.get(environment.host + 'orders/appointment?' + url);
    // http://ec2-54-88-194-105.compute-1.amazonaws.com:3001/orders/appointment?startdate=2018-01-01&enddate=2018-11-11&emp_id=1&branchid=1
  }
  getCategroys() {
    return this.http.get(environment.host + 'categorys');
  }

}
