import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../../core/services/user/user.service';
import { ToastService } from './../../../../../modules/shared/services/toast/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService: UserService, private toastService: ToastService, private router: Router) { }
  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
  });
  resetPassword = new FormGroup({
    newPassword: new FormControl('', [Validators.required,])
  });
  resetCode : any;

  ngOnInit(): void {
  }
  /*
  * Creates Resets Password request
  */
  async onSubmit(){
    console.log('In reset form values-', this.resetForm.value);
    let requestBody = {
      email: this.resetForm.value.email
    };
    (await this.userService.resetPassword(requestBody)).subscribe(async data => {
      console.log("After reset password response is", data);
      let body = data['body'];
      this.resetForm.reset();
      if (data.status == 200) {
        this.resetCode = body['code'];
        // this.toastService.showSuccess('Successful!', 'Sign in successfully');
      }
      else{
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');
      }
    }, (error) => {
      this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');

    });
  }
  /*
  * Sets new Password for User
  */
  async onChangePassword(){
    let requestBody = {
      code: this.resetCode,
      newPassword: this.resetPassword.value.newPassword
    };
    (await this.userService.setNewPassword(requestBody)).subscribe(async data => {
      console.log("After reset password response is", data);
      let body = data['body'];
      this.resetPassword.reset();
      if (data.status == 200) {
        this.toastService.showSuccess('Successful!', 'Password changed successfully');
        this.router.navigate(['/signin']);
      }
      else{
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');
      }
    }, (error) => {
      this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');

    });


  }

}
