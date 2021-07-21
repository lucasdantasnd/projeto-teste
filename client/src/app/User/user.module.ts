
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';


@NgModule({
    declarations: [
        UserListComponent,
        UserCreateComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        UserRoutingModule
    ]
})
export class UserModule { }