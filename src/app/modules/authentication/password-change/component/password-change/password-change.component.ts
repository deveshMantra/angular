import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/core/services/user/user.service';
import { ToastService } from 'src/app/modules/shared/services/toast/toast.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  constructor(private router: Router, private userService: UserService, private toastService: ToastService) {
  }

  password = new FormGroup({
    currentPassword: new FormControl("", [Validators.required]),
    newPassword: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
  }
  async onSubmit() {
    const response={...this.password.value,userUuid:JSON.parse(localStorage.getItem('userData')).uuid};

    (await this.userService.changePassword(response)).subscribe(async data => {
      console.log("After sign in user", data);
      if (data.status == 200) {
        localStorage.setItem("userData", JSON.stringify(data.body));
        this.toastService.showSuccess('Successful!', 'password change');
      } else {
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');
      }
    }, (error) => {
      if (error.error.error && error.error.errorMassage) {
        this.toastService.showError(error.error.error, error.error.errorMassage);
      }
      else {
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');
      }

    });

  }

}
