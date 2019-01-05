import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service'

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  redirect: any;
  password = "";
  mailId = "";
  errorMessage = false;
  btnDisable = true;

  constructor(private router: Router, private loginService: LoginService) {

    if (this.router.url == '/sale-dashboard') {
      $(document).ready(function () {
        $("#__sale").addClass("active");
      });
    }

    if (this.router.url == '/appointments') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__appt").addClass("active");
      });
    }

    if (this.router.url == '/time-clocks') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__time-clocks").addClass("active");
      });
    }

    if (this.router.url == '/schedule') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__schedule").addClass("active");
      });
    }

    if (this.router.url == '/reports') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__reports").addClass("active");
      });
    }

    if (this.router.url == '/management') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__manager").addClass("active");
      });
    }

    if (this.router.url == '/inventory') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__inventory").addClass("active");
      });
    }
    if (this.router.url == '/setup') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__setup").addClass("active");
      });
    }


  }
  ngOnInit() {


  }
  removeActiveClass() {
    $(document).ready(function () {
      $("#__sale").removeClass("active");
      $("#__appt").removeClass("active");
      $("#__time-clocks").removeClass("active");
      $("#__schedule").removeClass("active");
      $("#__reports").removeClass("active");
      $("#__manager").removeClass("active");
      $("#__inventory").removeClass("active");
      $("#__setup").removeClass("active");
    });
  }

  redirectToDashbaord() {
    this.removeActiveClass();
    this.router.navigate(['sale-dashboard']);
    $("#__sale").click(function () {
      $("#__sale").addClass("active");
    });
  }

  redirectToReport() {
    this.removeActiveClass();
    this.router.navigate(['reports'])
    $("#__reports").click(function () {
      $("#__reports").addClass("active");
    });
  }

  redirectToTimeClocks() {
    this.removeActiveClass();
    this.router.navigate(['time-clocks'])
    $("#__time-clocks").click(function () {
      $("#__time-clocks").addClass("active");
    });
  }

  redirectToSchedule() {
    this.removeActiveClass();
    this.router.navigate(['schedule'])
    $("#__schedule").click(function () {
      $("#__schedule").addClass("active");
    });
  }

  redirectToAppointment() {
    this.removeActiveClass();
    this.router.navigate(['appointments'])
    $("#__appt").click(function () {
      $("#__appt").addClass("active");
    });
  }

  redirectToManager() {
    this.removeActiveClass();
    $("#__manager").click(function () {
      $("#__manager").addClass("active");
    });
    $('#secondaryLoginModal').modal('show');
    this.redirect = "manager";
  }

  redirectToInventory() {
    this.removeActiveClass();
    $("#__inventory").click(function () {
      $("#__inventory").addClass("active");
    });
    $('#secondaryLoginModal').modal('show');
    this.redirect = "inventory";
  }

  redirectToSetup() {
    this.removeActiveClass();
    $("#__setup").click(function () {
      $("#__setup").addClass("active");
    });
    $('#secondaryLoginModal').modal('show');
    this.redirect = "setup";
  }

  redirectToHome() {
    this.router.navigate(['dashboard']);
  }

  errorClear() {
    this.errorMessage = false;
    if (this.password && this.mailId) {
      this.btnDisable = false;
    }
    else {
      this.btnDisable = true;
    }
  }

  loginSubmite() {
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    sessionStorage.removeItem('setup');
    sessionStorage.removeItem('inventory');
    sessionStorage.removeItem('manager');
    if (this.mailId && this.password) {
      this.loginService.loginData(data).subscribe(loginData => {
        if (loginData.json().status == false) {
          this.errorMessage = true;
        } else {
          $('#secondaryLoginModal').modal('hide');
          this.password = "";
          this.mailId = "";
          if (this.redirect == 'setup') {
            sessionStorage.setItem('setup', JSON.stringify(loginData.json()));
            this.router.navigate(['setup'])
          }
          if (this.redirect == 'inventory') {
            sessionStorage.setItem('inventory', JSON.stringify(loginData.json()));
            this.router.navigate(['inventory']) 
          }
          if (this.redirect == 'manager') {
            sessionStorage.setItem('manager', JSON.stringify(loginData.json()));
            this.router.navigate(['manager'])
          }
          this.redirect = "";
        }
      });
    }
  }
}
