import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PackagesServiceService {

  constructor(private http: Http) { }

  savePackage(pack:any){
    return this.http.post(environment.host + 'packages', pack);
  }
  getPackage(){
    return this.http.get(environment.host + 'packages');
  }
}
