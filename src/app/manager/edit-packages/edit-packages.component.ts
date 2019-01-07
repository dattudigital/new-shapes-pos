import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PackagesServiceService } from '../../services/packages-service.service';
@Component({
  selector: 'app-edit-packages',
  templateUrl: './edit-packages.component.html',
  styleUrls: ['./edit-packages.component.css']
})
export class EditPackagesComponent implements OnInit {
  packageData:any=[];

  constructor(private router: Router,private service: PackagesServiceService) { }

  ngOnInit() {
      this.service.getPackage().subscribe(data=>{
        this.packageData=data.json().result;
        console.log(this.packageData);
      })
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }
}
