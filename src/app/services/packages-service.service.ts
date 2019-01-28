import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PackagesServiceService {

  constructor(private http:HttpClient) { }

  savePackage(pack:any){
    return this.http.post(environment.host + 'packages', pack);
  }
  getPackage(){
    return this.http.get(environment.host + 'packages');
  }
}
