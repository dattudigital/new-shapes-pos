import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { managerRoutingModule } from './manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';
import { InactiveMembershipComponent } from './inactive-membership/inactive-membership.component';
import { StaffClockInOutComponent } from './staff-clock-in-out/staff-clock-in-out.component';
import { StaffVieworeditTimeclockComponent } from './staff-vieworedit-timeclock/staff-vieworedit-timeclock.component';
import { StaffPermissionsComponent } from './staff-permissions/staff-permissions.component';
import { StaffScheduleViewComponent } from './staff-schedule-view/staff-schedule-view.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { StaffScheduleAddComponent } from './staff-schedule-add/staff-schedule-add.component';
import { AddPackagesComponent } from './add-packages/add-packages.component';
import { EditPackagesComponent } from './edit-packages/edit-packages.component';
import { AddPromotionsComponent } from './add-promotions/add-promotions.component';
import { EditPromotionsComponent } from './edit-promotions/edit-promotions.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { AutoEmailsComponent } from './auto-emails/auto-emails.component';
import { MembershipSetupComponent } from './membership-setup/membership-setup.component';
import { CancelGroupLessonComponent } from './cancel-group-lesson/cancel-group-lesson.component';
import { AddGiftCardComponent } from './add-gift-card/add-gift-card.component';
import { EditGiftCardComponent } from './edit-gift-card/edit-gift-card.component';
import { ViewActiveGiftCardComponent } from './view-active-gift-card/view-active-gift-card.component';
import { OnlineGiftCardsComponent } from './online-gift-cards/online-gift-cards.component';
import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/growl';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    managerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    GrowlModule,
    MultiSelectModule,
    NgxSpinnerModule,
    CalendarModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    ManagerSidebarComponent,InactiveMembershipComponent,
    StaffClockInOutComponent,
    StaffVieworeditTimeclockComponent,
    StaffPermissionsComponent,
    StaffScheduleViewComponent,
    StaffMembersComponent,
    StaffScheduleAddComponent,
    AddPackagesComponent,
    EditPackagesComponent,
    AddPromotionsComponent,
    EditPromotionsComponent,
    NewsEventsComponent,
    AutoEmailsComponent,
    MembershipSetupComponent,
    CancelGroupLessonComponent,
    AddGiftCardComponent,
    EditGiftCardComponent,
    ViewActiveGiftCardComponent,
    OnlineGiftCardsComponent
  ],
  providers: [AuthGuard]
})

export class managerModule { }
