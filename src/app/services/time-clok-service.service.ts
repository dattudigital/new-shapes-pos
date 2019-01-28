import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeClokServiceService {

  constructor(private http: HttpClient) { }
  public timeClockLoginCredentials(loginData: any) {
    return this.http.post(environment.host + 'time-clocks/login', loginData)
  }
  public saveInandOutTime(time: any) {
    return this.http.post(environment.host + 'time-clocks', time)
  }
  public getAppiontmentData(data:any){
    return this.http.post(environment.host + 'time-clocks/appt',data)
  }
}
