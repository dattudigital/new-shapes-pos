import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../common-session/session.check';
import { setupRoutingModule } from './setup-routing.module';
import { SetupSidebarComponent } from './setup-sidebar/setup-sidebar.component'

@NgModule({
    imports: [CommonModule,
        setupRoutingModule],
    declarations: [SetupSidebarComponent],
    providers: [AuthGuard]

})

export class setupModule { }