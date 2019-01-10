import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fmyp-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  childData(data){
   console.log("test ******")
   console.log(data)
  }
  eventData(val){
    console.log('generate')
    console.log(val)
  }
}
