import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-ticket-invoice-payment',
  templateUrl: './new-ticket-invoice-payment.component.html',
  styleUrls: ['./new-ticket-invoice-payment.component.css']
})
export class NewTicketInvoicePaymentComponent implements OnInit {
  operand = '';
  constructor() {

  }

  ngOnInit() {
  }

  getTotal() {
    if (_.includes(this.operand, '+')) {
      let x = this.operand.split("+");
      if (x.length == 2) {
        let val1 = Number(x[0]);
        let val2 = Number(x[1]);
        this.operand = (val1 + val2).toString();
      }
    } else {
      if (_.includes(this.operand, '-')) {
        let x = this.operand.split("-");
        if (x.length == 2) {
          let val1 = Number(x[0]);
          let val2 = Number(x[1]);
          this.operand = (val1 - val2).toString();
        }
      } else {
        if (_.includes(this.operand, '/')) {
          let x = this.operand.split("/");
          if (x.length == 2) {
            let val1 = Number(x[0]);
            let val2 = Number(x[1]);
            this.operand = (val1 / val2).toString();
          }
        } else {
          if (_.includes(this.operand, '%')) {
            let x = this.operand.split("%");
            if (x.length == 2) {
              let val1 = Number(x[0]);
              let val2 = Number(x[1]);
              this.operand = (val1 % val2).toString();
            }
          } else {
            if (_.includes(this.operand, '*')) {
              let x = this.operand.split("*");
              if (x.length == 2) {
                let val1 = Number(x[0]);
                let val2 = Number(x[1]);
                this.operand = (val1 * val2).toString();
              }
            }
          }
        }
      }
    }
  }

  addToCalculation(value: any) {
    this.operand += value.toString();
  }

  onClickMathFunction(typeOfFunction: string) {
    if (typeOfFunction == '√') {
      this.operand = (Math.sqrt(Number(this.operand))).toString();
    }
  }

  onClickClear() {
    this.operand = '';
  }

  removeLast() {
    this.operand = this.operand.substr(0, this.operand.length - 1);
  }

  calculate(operator: any) {
    if (_.includes(this.operand, '+')) {
      let x = this.operand.split("+");
      if (x.length == 2) {
        let val1 = Number(x[0]);
        let val2 = Number(x[1]);
        this.operand = (val1 + val2).toString();
      }
    } else {
      if (_.includes(this.operand, '-')) {
        let x = this.operand.split("-");
        if (x.length == 2) {
          let val1 = Number(x[0]);
          let val2 = Number(x[1]);
          this.operand = (val1 - val2).toString();
        }
      } else {
        if (_.includes(this.operand, '/')) {
          let x = this.operand.split("/");
          if (x.length == 2) {
            let val1 = Number(x[0]);
            let val2 = Number(x[1]);
            this.operand = (val1 / val2).toString();
          }
        } else {
          if (_.includes(this.operand, '%')) {
            let x = this.operand.split("%");
            if (x.length == 2) {
              let val1 = Number(x[0]);
              let val2 = Number(x[1]);
              this.operand = (val1 % val2).toString();
            }
          } else {
            if (_.includes(this.operand, '*')) {
              let x = this.operand.split("*");
              if (x.length == 2) {
                let val1 = Number(x[0]);
                let val2 = Number(x[1]);
                this.operand = (val1 * val2).toString();
              }
            }
          }
        }
      }
    }
    this.operand += operator;
  }
}