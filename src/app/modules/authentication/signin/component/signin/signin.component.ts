import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../../core/services/user/user.service';
import { ToastService } from './../../../../../modules/shared/services/toast/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private toastService: ToastService) { }

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
  }
  async onSubmit() {
    let requestBody = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    };
    console.log('signInForm values-', this.signInForm.value);
    localStorage.setItem("signInForm", JSON.stringify(this.signInForm.value));
    (await this.userService.signIn(requestBody)).subscribe(async data => {
      console.log("After sign in user", data);
      if (data.status == 200) {
        this.toastService.showSuccess('Successful!', 'Sign in successfully');
      }
      else {
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');

      }
    }, (error) => {
      if (error.status == 400) {
        this.toastService.showWarning('Wrong Password', 'Please enter correct password or reset your password');
      }
      else{
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');
      }

    });
    // this.router.navigate(['/toast-example']);

  }

}
