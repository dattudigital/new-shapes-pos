import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-session/session.check';
import { SetupSidebarComponent } from './setup-sidebar/setup-sidebar.component'

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
                component: SetupSidebarComponent,
                canActivate: [AuthGuard]
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class setupRoutingModule { }