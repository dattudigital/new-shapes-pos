import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Membership } from '../../model/membership.model';
import { Http } from '@angular/http';
import { Paginator } from 'primeng/paginator';
import { MembershipServiceService } from '../../services/membership-service.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  memberships: any = []
  editRowId: any;
  catagroyData = new Array();

  constructor(private router: Router, private http: Http, private service: MembershipServiceService) { }

  ngOnInit() {
    this.service.getMembership().subscribe(memberships => {
      this.memberships = memberships.json().result;
      console.log("mem"+this.memberships)
    })
    this.getCategory();
  }

  UpdateMembership(val) {
    var data = {
      "membership_name": val.membership_name,
      "membership_code": val.membership_code,
      "membership_discount": val.membership_discount,
      "membership_price": val.membership_price,
      "membership_validity_in_days": val.membership_validity_in_days,
      "membership_id": val.membership_id,
      "cat_id": val.cat_id
    }
    this.service.editMembership(data).subscribe(response => {
      this.editRowId = '';
    })
  }
  set_catagroy(data) {

  }

  backToMembership() {
    this.router.navigate(['manager']);
  }

  edit(val) {
    this.editRowId = val;
  }

  getCategory() {
    this.service.getCategoryList().subscribe(response => {
      this.catagroyData = response.json().result;
    })
  }

  changeCategory(val, userId, index) {

  }
  
  getSubCategory() {

  }
}
