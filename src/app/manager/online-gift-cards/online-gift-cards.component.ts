import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-online-gift-cards',
  templateUrl: './online-gift-cards.component.html',
  styleUrls: ['./online-gift-cards.component.css']
})
export class OnlineGiftCardsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }
}
