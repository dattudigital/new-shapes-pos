import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FooterServiceService {
  
  
  constructor(private http:Http) { }

  public searchPrice(val: any) {
    return this.http.get(environment.host + 'sales/price/' + val);
  }
}
