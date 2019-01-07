import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-membership-setup',
  templateUrl: './membership-setup.component.html',
  styleUrls: ['./membership-setup.component.css']
})
export class MembershipSetupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }
}
