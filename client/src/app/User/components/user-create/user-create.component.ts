import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUserModel } from 'src/app/core/models/inputs/create.user.model';
import { resultModel } from 'src/app/core/models/outputs/result.model';
import { UserService } from 'src/app/core/services/user.service';
import { ResultUserModel } from 'src/app/core/models/outputs/user.result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  userForm!: FormGroup;
  errorsList!: ResultUserModel[];

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): any {
    if (this.userForm.invalid)
      return this._snackBar.open('formulário inválido', '', {
        duration: 3000
      });

    var createUserModel = new CreateUserModel(this.userForm.value);
    this.userService.createUser(createUserModel).subscribe(res => {
      this.handle(res);
    }, error => {
      // _logserivce(error);
      this._snackBar.open('não foi possível criar o usuário', '', {
        duration: 3000
      });
    });
  }

  buildForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  handle(resultModel: resultModel) {
    if (resultModel.success)
      this.router.navigate(['/users']);

    if (resultModel.data)
      this.errorsList = resultModel.data;

    this._snackBar.open(resultModel.message, '', {
      duration: 3000
    });
  }


}
