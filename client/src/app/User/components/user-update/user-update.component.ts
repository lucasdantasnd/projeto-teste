import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUserModel } from 'src/app/core/models/inputs/update.user.model';
import { ResultUserModel } from 'src/app/core/models/outputs/user.result.model';
import { UserService } from 'src/app/core/services/user.service';
import { resultModel } from 'src/app/core/models/outputs/result.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  userUpdateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router) { }

  ngOnInit(): void {
    const userId = this._route.snapshot.paramMap.get('id');
    if (userId)
      this.getUserById(userId);

    this.buildForm();
  }

  buildForm() {
    this.userUpdateForm = this.fb.group({
      id: ['', { value: '', disabled: true }],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): any {
    if (this.userUpdateForm.invalid)
      return this._snackBar.open('formulário inválido', '', {
        duration: 3000
      });

    var updateUserModel = new UpdateUserModel(this.userUpdateForm.value);
    this._userService.updateUser(updateUserModel).subscribe(res => {
      this.handle(res);
    }, error => {
      // _logserivce(error);
      this._snackBar.open('não foi possível criar o usuário', '', {
        duration: 3000
      });
    });
  }

  fillForm(user: ResultUserModel) {
    this.userUpdateForm.controls['id'].setValue(user.id);
    this.userUpdateForm.controls['name'].setValue(user.name);
    this.userUpdateForm.controls['email'].setValue(user.email);
    this.userUpdateForm.updateValueAndValidity();
  }

  getUserById(userId: string) {
    this._userService.getUserById(userId).subscribe(res => {
      this.fillForm(res);
    }, error => {
      // _logserivce(error);
      this._snackBar.open('não foi possível carregar o usuário', '', {
        duration: 3000
      });
    })
  }

  handle(resultModel: resultModel) {
    if (resultModel.success)
      this._router.navigate(['/users']);

    this._snackBar.open(resultModel.message, '', {
      duration: 3000
    });
  }
}
