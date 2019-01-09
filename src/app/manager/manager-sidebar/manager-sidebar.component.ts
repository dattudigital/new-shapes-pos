import { Component, OnInit, ElementRef } from '@angular/core';
import { GiftCardServiceService } from '../../services/gift-card-service.service';
import { HttpClient } from '@angular/common/http';
// import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { MembershipServiceService } from '../../services/membership-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;

@Component({
  selector: 'fmyp-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.css']
})
export class ManagerSidebarComponent implements OnInit {

  model: any = {};
  addMembership: any = {
    'sub_cat_id': '',
    'cat_id': '',
    'membership_name': '',
    'membership_code': '',
    'membership_discount': '',
    'membership_price': '',
    'membership_validity_in_days': ''
  };

  soldAt = '';
  cardValue = '';
  discountPrice = '';
  cardName = '';
  sellOnline = '';
  setPrice = '';
  everyonePurchase = '';

  catagroyData = new Array();
  sub_catagroyData = new Array();
  temp3: any[] = [];
  selectedCategoryObject: any;
  selectedSubCategoryObject: any;
  memName: string;
  memDesc: string;
  memImage: string;
  memDiscount: number;
  memPrice: number;
  memValidityDate: string;
  memCode: string;
  memberships: any;
  selectedValue: string;
  selectedOption: any;
  states: any[] = [];
  sidebarActiveName: any = "";
  constructor(private service: MembershipServiceService, private location: Location, private giftcard: GiftCardServiceService, private http: HttpClient, private router: Router, private eleRef: ElementRef) {
    let URL = this.location.path();
    console.log(URL);
  }

  commMarkClickInfo() {
    this.sidebarActiveName = "com&mar";
    let modelClose = document.getElementById("com-and-info-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("com&mar"));
  }

  staffClickInfo() {
    let modelClose = document.getElementById("staff-tab");
    modelClose.click();
    this.sidebarActiveName = "staff";
    sessionStorage.setItem('manager-routing', JSON.stringify("staff"));
  }

  clientClickInfo() {
    let modelClose = document.getElementById("client-tab");
    modelClose.click();
    this.sidebarActiveName = "client";
    sessionStorage.setItem('manager-routing', JSON.stringify("client"));
  }

  membershipClickInfo() {
    let modelClose = document.getElementById("membership-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("memberhip"));
    this.sidebarActiveName = "membership";
  }

  packageClickInfo() {
    let modelClose = document.getElementById("packages-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("package"));
    this.sidebarActiveName = "package";
  }

  promitionClickInfo() {
    let modelClose = document.getElementById("promotions-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("promotion"));
    this.sidebarActiveName = "promotion";
  }

  giftcardClickInfo() {
    let modelClose = document.getElementById("gift-card-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("giftcard"));
    this.sidebarActiveName = "giftcard";
  }

  productClickInfo() {
    let modelClose = document.getElementById("product-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("product"));
    this.sidebarActiveName = "product";
  }

  pricingClickInfo() {
    let modelClose = document.getElementById("pricing-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("pricing"));
    this.sidebarActiveName = "pricing";
  }

  discountClickInfo() {
    let modelClose = document.getElementById("discount-tab");
    modelClose.click();
    sessionStorage.setItem('manager-routing', JSON.stringify("discount"));
    this.sidebarActiveName = "discount";
  }

  changeCategory(event: string): void {
    this.selectedCategoryObject = JSON.parse(event);
  }

  customerSearch(val) {
    this.giftcard.searchPlace(val).subscribe(data => {
      this.temp3.push(data.json());
      this.states = this.temp3.pop();
    });
  }

  changeSubCategory(event: string): void {
    this.selectedSubCategoryObject = JSON.parse(event);
  }

  getCategory() {
    this.service.getCategoryList().subscribe(response => {
      this.catagroyData = response.json().result;
    });
  }

  ngOnInit() {
    let sessionData = sessionStorage.getItem('manager-routing');
    if (sessionData == '"com&mar"') {
      this.commMarkClickInfo();
    } else if (sessionData == '"staff"') {
      this.staffClickInfo();
    } else if (sessionData == '"client"') {
      this.clientClickInfo();
    } else if (sessionData == '"memberhip"') {
      this.membershipClickInfo();
    } else if (sessionData == '"package"') {
      this.packageClickInfo();
    } else if (sessionData == '"promotion"') {
      this.promitionClickInfo();
    } else if (sessionData == '"giftcard"') {
      this.giftcardClickInfo();
    } else if (sessionData == '"product"') {
      this.productClickInfo();
    } else if (sessionData == '"pricing"') {
      this.pricingClickInfo();
    } else if (sessionData == '"discount"') {
      this.discountClickInfo();
    }
  }

  downloadExcel() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ["First Name", "Last Name", "ID"]
    };
    // new Angular5Csv(this.memberships, 'Memebership Info', options);
  }

  // downloadPdf() {
  //   const doc = new jsPDF('p', 'pt');
  //   var rows = this.memberships;
  //   var columns = [
  //     { title: "Name", dataKey: "membership_name" },
  //     { title: "Description", dataKey: "membership_description" },
  //     { title: "Price", dataKey: "membership_price" },
  //     { title: "Discount", dataKey: "membership_discount" }
  //   ];
  //   doc.autoTable(columns, rows, {
  //     styles: {
  //       lineColor: [44, 62, 80],
  //       lineWidth: 0.75
  //     },
  //     columnStyles: {
  //       id: { fillColor: 255 }
  //     },
  //     tableLineWidth: 0.75,
  //     margin: { top: 60 },
  //     addPageContent: function (data) {
  //       doc.text("Memebership Info", 40, 30);
  //     }
  //   });
  //   doc.save('membership.pdf')
  // }

  onEdit(val) {
    this.memName = val.membership_name;
    this.memDesc = val.membership_description;
    this.selectedCategoryObject = {
      "cat_id": 11,
      "category_name": "Make Up"
    };
  }

  addMembershipClick() {
    this.service.saveMembershipDetails(this.addMembership).subscribe(response => {
    })
    $("#add-membership").modal('hide');
    this.addMembership.cat_id = "";
    this.addMembership.sub_cat_id = "";
    this.addMembership.membership_name = "";
    this.addMembership.membership_code = "";
    this.addMembership.membership_discount = "";
    this.addMembership.membership_price = "";
    this.addMembership.membership_validity_in_days = "";
  }

  showActiveMembershipClick() {
    this.router.navigate(['manager/management-membership']);
  }

  showInactiveMembershipClick() {
    this.router.navigate(['manager/inactive-membership'])

  }

  staffClockInandOut() {
    this.router.navigate(['manager/staff-clock-in/out'])
  }

  VieworEditTimeClock() {
    this.router.navigate(['manager/staff-view/edit-timeclock'])
  }

  StaffPermissions() {
    this.router.navigate(['manager/staff-permissions'])
  }

  ScheduleView() {
    this.router.navigate(['manager/staff-schedule-view'])
  }

  StaffMembers() {
    this.router.navigate(['manager/staff-members'])
  }

  ScheduleAddorEdit() {
    this.router.navigate(['manager/staff-schedule-add/edit'])
  }

  AddPackagesClick() {
    this.router.navigate(['manager/add-packages'])
  }

  EditPackagesClick() {
    this.router.navigate(['manager/edit-packages'])
  }

  AddPromotionsClick() {
    this.router.navigate(['manager/add-promotions'])
  }

  EditPromotionsClick() {
    this.router.navigate(['manager/edit-promotions'])
  }

  newsAndEventsClick() {
    this.router.navigate(['manager/news-and-events'])
  }

  autoEmailClick() {
    this.router.navigate(['manager/auto-emails'])
  }
  membershipSetupClick() {
    this.router.navigate(['manager/membership-setup'])
  }

  cancelClick() {
    this.router.navigate(['manager/cancel-group-lesson'])
  }

  newGiftClick() {
    this.router.navigate(['manager/add-new-gift-card'])
  }

  editGiftClick() {
    this.router.navigate(['manager/edit-gift-card'])
  }

  viewGiftClick() {
    this.router.navigate(['manager/view-active-gift-card'])
  }

  redirectToViewGiftClick() {
    this.router.navigate(['manager/view-active-gift-card'])
  }

  onlineGiftClick() {
    this.router.navigate(['manager/online-gift-card'])
  }

  setSub_catagroy(cat_id: any): void {
    this.addMembership.cat_id = cat_id;
    this.service.getSub_CategoryList(this.addMembership.cat_id).subscribe(response => {
      this.sub_catagroyData = response.json().result;
    });

  }
  setTitleTypeClient(sub_cat_id: any): void {
    this.addMembership.sub_cat_id = sub_cat_id;
  }

  saveGiftCard() {
      var data: any = {
      giftcard_sold_at: this.soldAt,
      giftcard_value: this.cardValue,
      giftcard_name: this.cardName,
      giftcard_allow_staff_set_price: this.setPrice,
      giftcard_everyone_purchase: this.everyonePurchase
    }

    if (this.sellOnline.toString() == 'true') {
      data.giftcard_sell_online = '1'
    } else {
      data.giftcard_sell_online = '0'
    }
    if (this.discountPrice.toString() == 'true') {
      data.giftcard_discount_price = '1'
    } else {
      data.giftcard_discount_price = '0'
    }

    this.giftcard.saveGiftCard(data).subscribe(data => {
    });
  }

}
