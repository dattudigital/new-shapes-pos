import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-add-gift-card',
  templateUrl: './add-gift-card.component.html',
  styleUrls: ['./add-gift-card.component.css']
})
export class AddGiftCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }

}
