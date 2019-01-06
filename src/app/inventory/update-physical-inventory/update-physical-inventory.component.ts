import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-physical-inventory',
  templateUrl: './update-physical-inventory.component.html',
  styleUrls: ['./update-physical-inventory.component.css']
})
export class UpdatePhysicalInventoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
}
