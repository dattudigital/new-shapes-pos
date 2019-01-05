import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private http: Http) { }

  public saveSuppliers(supplier: any) {
    return this.http.post(environment.host + 'suppliers', supplier);
  }
 public getSuppliers(){
   return this.http.get(environment.host + 'suppliers');
 }
 public getInactiveSupplier(active:any){
   console.log(active);
  return this.http.get(environment.host + 'suppliers?active='+active);
 }
public getSelectedSupplier(id:any){
  return this.http.get(environment.host + 'suppliers/' +id);
}

// public test(url:any){
//   return this.http.get(environment.host + 'suppliers' +url);
// }

public postPurchaseOrder(data:any){
  
return this.http.post(environment.host + 'pur-orders',data);
}

public getPurchaseOrder(data:any){
  return this.http.get(environment.host + 'pur-orders?' +data);
}

public getSelectedPurchaseOrder(id:any){
 return this.http.get(environment.host + 'pur-orders/'+id);
}

public getproduct(){
  return this.http.get(environment.host + 'products')
}
 public getSelectedProduct(id: number) {
  return this.http.get(environment.host + 'products/' + id);
}

public saveInventoryTicket(data:any){
  console.log(data);
return this.http.post(environment.host + 'inv-tkts',data)
}
 public getInventoryTicket(data:any){
   return this.http.get(environment.host + 'inv-tkts?' +data)

 }
} 
