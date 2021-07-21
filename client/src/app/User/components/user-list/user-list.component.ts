import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { resultModel } from 'src/app/core/models/outputs/result.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'updateAction', 'removeAction'];
  dataSource: any;

  constructor(private _userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this._userService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    }, error => {
      // _logserivce(error);
      this._snackBar.open('não foi possível carregar a lista de usuários', '', {
        duration: 3000
      });
    });
  }

  removeUser(id: string) {
    this._userService.deleteUser(id).subscribe(res => {
      this.handle(res);
    }, error => {
      // _logserivce(error);
    })
  }

  updateUser(id: string) {
    this.router.navigate(['/users/update', { id: id }]);
  }

  handle(result: resultModel) {

    if (result.success)
      this.getUsers();

    this._snackBar.open(result.message, '', {
      duration: 3000
    });
  }

}
