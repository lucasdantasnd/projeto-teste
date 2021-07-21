
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';


const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    },
    {
        path: 'create',
        component: UserCreateComponent
    },
    {
        path: 'update',
        component: UserUpdateComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }