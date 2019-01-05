import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { managerRoutingModule } from './manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    managerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ManagerSidebarComponent
  ],
  providers: [AuthGuard]
})

export class managerModule { }
