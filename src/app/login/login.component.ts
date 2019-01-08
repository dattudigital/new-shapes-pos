import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
declare var $: any;
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = "";
  mailId = "";
  alerts: any[] = [];
  errorMessage = false;

  constructor(private spinner: NgxSpinnerService,private http: HttpClient, private router: Router, private loginService:LoginService) { 
  }

  ngOnInit() {
    this.loginPopUp();
  }

  loginSubmite() {
    sessionStorage.removeItem('userSession')
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    this.spinner.show();
    if (this.mailId && this.password) {    
      this.loginService.loginData(data).subscribe(loginData => {
        this.spinner.hide();
        if (loginData.json().status == false) {
          this.errorMessage = true;
        } else {
          sessionStorage.setItem('userSession', JSON.stringify(loginData.json()));
          this.router.navigate(['sale']);
          $('#loginModal').modal('hide');
        }
      });
    } else {
      this.errorMessage = true;
    }
  }

  loginPopUp() {
    $('#loginModal').modal('show');
  }
}
