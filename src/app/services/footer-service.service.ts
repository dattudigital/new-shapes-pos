import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FooterServiceService {
  
  
  constructor(private http:HttpClient) { }

  public searchPrice(val: any) {
    return this.http.get(environment.host + 'sales/price/' + val);
  }
}
