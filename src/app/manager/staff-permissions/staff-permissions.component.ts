import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-staff-permissions',
  templateUrl: './staff-permissions.component.html',
  styleUrls: ['./staff-permissions.component.css']
})
export class StaffPermissionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }
}
