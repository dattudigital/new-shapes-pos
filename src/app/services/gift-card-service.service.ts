import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GiftCardServiceService {

  constructor(private http: Http) { }

  public getGiftCard() {
    return this.http.get(environment.host + 'giftcards');
  }
  public saveGiftCard(gift: any) {
    return this.http.post(environment.host + 'giftcards', gift);
  }
  public searchPlace(val: any) {
    return this.http.get(environment.host + 'search-manager/search/' + val);
  }
}
