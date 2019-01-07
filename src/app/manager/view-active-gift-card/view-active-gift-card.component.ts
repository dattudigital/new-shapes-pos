import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-view-active-gift-card',
  templateUrl: './view-active-gift-card.component.html',
  styleUrls: ['./view-active-gift-card.component.css']
})
export class ViewActiveGiftCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }
}
