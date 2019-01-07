import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'side-bar'
      },
      {
        path: 'side-bar',
        component: ManagerSidebarComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'inactive-membership',
        component: InactiveMembershipComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'staff-clock-in/out',
        component: StaffClockInOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'staff-view/edit-timeclock',
        component: StaffVieworeditTimeclockComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'staff-permissions',
        component: StaffPermissionsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'staff-schedule-view',
        component: StaffScheduleViewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'staff-members',
        component: StaffMembersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'staff-schedule-add/edit',
        component: StaffScheduleAddComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'add-packages',
        component: AddPackagesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-packages',
        component: EditPackagesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-promotions',
        component: AddPromotionsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-promotions',
        component: EditPromotionsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'news-and-events',
        component: NewsEventsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'auto-emails',
        component: AutoEmailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'membership-setup',
        component: MembershipSetupComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cancel-group-lesson',
        component: CancelGroupLessonComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-new-gift-card',
        component: AddGiftCardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-gift-card',
        component: EditGiftCardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'view-active-gift-card',
        component: ViewActiveGiftCardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'online-gift-card',
        component: OnlineGiftCardsComponent,
        canActivate: [AuthGuard]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class managerRoutingModule { }
