import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SheduleServiceService } from '../../services/shedule-service.service';
import { GiftCardServiceService } from '../../services/gift-card-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Globals } from '../../../global/global-urls';
// import { Angular5Csv } from 'angular5-csv/Angular5-csv';

import { LoginService } from '../../services/login.service';
import { MembershipServiceService } from '../../services/membership-service.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'fmyp-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.css']
})
export class ManagerSidebarComponent implements OnInit {


  model: any = {};
  errorMessage = false;
  loginTest: any;
  titleStyle = "hidden";
  password = "";
  mailId = "";
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
  categoryArray: any[];
  temp: any[] = [];
  temp3: any[] = [];
  subCategoryArray: any[];
  temp1: any[] = [];
  temp2: any[] = [];
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
  private isShowMembership = false;
  private isShowPackage = false;

  selectedValue: string;
  selectedOption: any;
  states: any[] = [];
  btnDisable = true;

  constructor(private service: MembershipServiceService, private loginService: LoginService, private giftcard: GiftCardServiceService, private schedule: SheduleServiceService, private http: HttpClient, private router: Router) {

    this.http.get(environment.host + 'categorys').subscribe(data => {
      this.temp.push([
        {
          "cat_id": 11,
          "category_name": "Make Up"
        },
        {
          "cat_id": 12,
          "category_name": "Facials"
        }
      ]);
      this.categoryArray = this.temp[0];
    });
    this.http.get(environment.host + 'sub-categorys').subscribe(data => {
      this.temp1.push(data);
      this.subCategoryArray = this.temp1[0];
    });
    this.http.get(environment.host + 'memberships').subscribe(memberShipData => {
      this.temp2.push(memberShipData);
      this.memberships = this.temp2[0];
    });
  }

  // showSuccess() {
  //   this.msgs = [];
  //   this.msgs.push({ severity: 'success', summary: 'GiftCard Added Successfully' });
  // }
  // onSubmit() {
  //   if (sessionStorage.secondaryLoginData) {
  //     window.sessionStorage.removeItem('secondaryLoginData');
  //     //console.log('secondaryLoginData')
  //   }
  //   // this.spinner.show();
  //   if (this.model.email_id && this.model.password) {
  //     this.loginService.loginData(this.model).subscribe(loginData => {
  //       if (loginData.json().status == false) {
  //         this.errorMessage = true;
  //         // this.spinner.hide();
  //       }
  //       this.loginTest = loginData.json().result[0];
  //       console.log(this.loginTest);
  //       console.log(this.loginTest.user_type_id);

  //       if (loginData.json().status == true && this.loginTest.user_type_id !== 4) {
  //         //console.log(loginData.json().result[0])
  //         sessionStorage.setItem('secondaryLoginData', JSON.stringify(loginData.json().result[0]));
  //         sessionStorage.setItem('backBtnManager', 'Y');
  //         $('#myModal').modal('hide');
  //         this.titleStyle = "visible";
  //         // this.spinner.hide();
  //       } else {
  //         this.errorMessage = true;
  //         // this.spinner.hide();
  //       }
  //     });
  //   }
  // }
  errorClear() {
    this.errorMessage = false;
  }
  RedirectToHome() {
    // this.router.navigate(['dashboard']);
  }

  commMarkClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("com&mar"));
    $(".com-mark-info").trigger("click");
    this.removeClass();
    $(".com-mark-info").addClass("active");
  }

  staffClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("staff"));
    $(".staff-info").trigger("click");
    this.removeClass();
    $(".staff-info").addClass("active");
  }

  clientClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("client"));
    $(".client-info").trigger("click");
    this.removeClass();
    $(".client-info").addClass("active");
  }

  membershipClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("memberhip"));
    $(".mem-info").trigger("click");
    this.removeClass();
    $(".mem-info").addClass("active");
  }

  packageClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("package"));
    $(".package-info").trigger("click");
    this.removeClass();
    $(".package-info").addClass("active");
  }

  promitionClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("promotion"));
    $(".promotion-info").trigger("click");
    this.removeClass();
    $(".promotion-info").addClass("active");
  }

  giftcardClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("giftcard"));
    $(".gift-card-info").trigger("click");
    this.removeClass();
    $(".gift-card-info").addClass("active");
  }

  productClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("product"));
    $(".product-info").trigger("click");
    this.removeClass();
    $(".product-info").addClass("active");
  }

  inventoryClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("inventory"));
    $(".inventory-info").trigger("click");
    this.removeClass();
    $(".inventory-info").addClass("active");
  }

  pricingClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("pricing"));
    $(".pricing-info").trigger("click");
    this.removeClass();
    $(".pricing-info").addClass("active");
  }

  discountClickInfo() {
    sessionStorage.setItem('manager-routing', JSON.stringify("discount"));
    $(".discount-info").trigger("click");
    this.removeClass();
    $(".discount-info").addClass("active");
  }

  removeClass() {
    $(".com-mark-info").removeClass("active");
    $(".staff-info").removeClass("active");
    $(".client-info").removeClass("active");
    $(".mem-info").removeClass("active");
    $(".package-info").removeClass("active");
    $(".promotion-info").removeClass("active");
    $(".gift-card-info").removeClass("active");
    $(".product-info").removeClass("active");
    $(".inventory-info").removeClass("active");
    $(".pricing-info").removeClass("active");
    $(".discount-info").removeClass("active");
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

  // onSelect(event: TypeaheadMatch): void {
  //   this.selectedOption = event.item;
  // }

  changeSubCategory(event: string): void {
    this.selectedSubCategoryObject = JSON.parse(event);
  }

  ngOnInit() {
    sessionStorage.removeItem('backBtnInventory');
    sessionStorage.removeItem('backBtnSetup');
    sessionStorage.removeItem('backBtnReports');
    // sessionStorage.removeItem('backBtnManager');     
    //sessionStorage.removeItem('backBtnSales');     
    //sessionStorage.removeItem('backBtnAppiontments');     
    sessionStorage.removeItem('backBtnTimeclocks');
    sessionStorage.removeItem('backBtnShedule');
  
    this.service.getCategoryList().subscribe(response => {
      this.catagroyData = response.json().result;
    });
    if (sessionStorage.getItem('manager-routing') == '"com&mar"') {
      this.commMarkClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"staff"') {
      this.staffClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"client"') {
      this.clientClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"memberhip"') {
      this.membershipClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"package"') {
      this.packageClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"promotion"') {
      this.promitionClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"giftcard"') {
      this.giftcardClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"product"') {
      this.productClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"inventory"') {
      this.inventoryClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"pricing"') {
      this.pricingClickInfo();
    } else if (sessionStorage.getItem('manager-routing') == '"discount"') {
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
  id = 10;
  key: string = 'name';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  membershipClick() {
    this.isShowMembership = true;
    this.isShowPackage = false;
  }

  packageClick() {
    this.isShowMembership = false;
    this.isShowPackage = true;
  }

  productsClick() {

  }

  staffClick() {

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
    let sellOnlineCheckBox;
    let discountCheckbox;
    let setPriceRadio;
    let everyoneRadio;
    if (this.sellOnline.toString() == 'true') {
      sellOnlineCheckBox = '1'
    } else {
      sellOnlineCheckBox = '0'
    }
    if (this.discountPrice.toString() == 'true') {
      discountCheckbox = '1'
    } else {
      discountCheckbox = '0'
    }

    var data: any = {
      giftcard_sold_at: this.soldAt,
      giftcard_value: this.cardValue,
      giftcard_discount_price: discountCheckbox,
      giftcard_name: this.cardName,
      giftcard_sell_online: sellOnlineCheckBox,
      giftcard_allow_staff_set_price: this.setPrice,
      giftcard_everyone_purchase: this.everyonePurchase
    }

    this.giftcard.saveGiftCard(data).subscribe(data => {
    });

  }


}
