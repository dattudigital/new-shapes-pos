import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  selectedValue: string;
  selectedOption: any;
  product: any[] = [];
  temp: any[] = [];
  states: any[] = new Array();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  newTicket() {
    this.router.navigate(['sale/new-ticket']);
  }

  customerSearch() {
    //   if(val.length >= 2){
    //   this.service.searchPrice(val).subscribe(data => {
    //     this.temp.push(data.json());
    //     this.product = this.temp.pop();
    //     console.log(this.product);
    //   });
    // } else{
    //   this.product=[];
    // }
  }
  priceSearch() {
    this.states = [];
    this.selectedValue;
  }
  //   else{
  //     this.states=[];
  //   }
  // }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
  redirectToTodaySale() {
    this.router.navigate(['todays-sale']);
  }
}
