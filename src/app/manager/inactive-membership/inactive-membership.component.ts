import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from '../../services/manager-service.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-inactive-membership',
  templateUrl: './inactive-membership.component.html',
  styleUrls: ['./inactive-membership.component.css']
})
export class InactiveMembershipComponent implements OnInit {
  inactivemembership: any = [];
  cols: any = [];

  constructor(private service: ManagerServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.service.getInactiveMembership().subscribe(inactivemembership => {
      this.inactivemembership = inactivemembership["result"];
      this.cols = [
        { field: 'membership_name', header: 'Membership Name' },
        { field: 'membership_code', header: 'Membership Code' },
        { field: 'membership_price', header: 'Membership Price' },
        { field: 'rec_status', header: ' Status' }
      ];
    })
    
  }
  backToMembership() {
    this.router.navigate(['manager']);
  }

}
