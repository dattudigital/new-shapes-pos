import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-auto-emails',
  templateUrl: './auto-emails.component.html',
  styleUrls: ['./auto-emails.component.css']
})
export class AutoEmailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }

}
