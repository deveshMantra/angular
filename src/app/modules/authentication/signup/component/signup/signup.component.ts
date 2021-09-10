import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../../core/services/user/user.service';
import { ToastService } from './../../../../../modules/shared/services/toast/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private toastService: ToastService) { }

  signUpForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    LastName: new FormControl("", [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
  }
  async onSubmit() {
    let requestBody = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      firstName: this.signUpForm.value.firstName,
      LastName: this.signUpForm.value.firstName
    };
    console.log('signUpForm values-', requestBody);
    (await this.userService.createUser(requestBody)).subscribe(async data => {
      console.log("Create user", data);
      if (data.status == 200) {
        this.router.navigate(['/signin']);
        this.toastService.showSuccess('Successful!', 'Sign up successfully');
      }
      else {
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');

      }
    }, (error) => {
      if(error.status == 400){
        this.toastService.showWarning('User already registered', 'Use different email id');
      }
      else{
        this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection');
      }

    });
  }
   // this.router.navigate(['/signin']);

}
