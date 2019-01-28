import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import { StaffServiceService } from '../../services/staff-service.service';
declare var $: any;
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {
  msgs: Message[] = [];
  firstname = '';
  lastname = '';
  phone = '';
  email = '';
  branch = '';
  address = '';
  staffData: any = [];

  submitted = false;
  extraDisable = true;
  constructor(private router: Router, private service: StaffServiceService) { }

  ngOnInit() {
    this.getStaffData();
  }

  backToMembership() {
    this.router.navigate(['manager']);
  }
  addExtraDisable() {
    this.extraDisable = false;
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'StaffMember Added Successfully' });
  }

  saveStaffMember() {
    this.submitted = true;
    var data: any = {
      employee_firstname: this.firstname,
      employee_lastname: this.lastname,
      email_id: this.email,
      phone: this.phone,
      employee_branch: this.branch,
      employee_address: this.address
    }
    this.service.saveStaff(data).subscribe(response => {
      console.log(response);
      this.extraDisable = true;
    })
    $("#exampleModal").modal('hide');
    this.firstname = "",
      this.lastname = "",
      this.phone = "",
      this.email = ""
  }

  getStaffData() {
    this.service.getStaff().subscribe(staffData => {
      this.staffData = staffData["result"];
    })
  }
}
