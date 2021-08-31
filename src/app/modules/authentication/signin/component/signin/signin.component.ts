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
    email: new FormControl(),
    password: new FormControl()
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
      else{
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');
      }
    }, (error) => {
      this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');

    });
    // this.router.navigate(['/toast-example']);

  }

}
