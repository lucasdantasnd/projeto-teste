import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { resultModel } from 'src/app/core/models/result.model';
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
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this._userService.getAll().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
    }, error => {
      // _logserivce(error);
      this._snackBar.open('não foi possível carregar os dados', '', {
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

  updateUser() {

  }

  handle(result: resultModel) {

    if (result.success)
      this.getUsers();

    this._snackBar.open(result.message, '', {
      duration: 3000
    });
  }

}
