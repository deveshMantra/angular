import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) { }

  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('userForm values-', this.userForm.value);
    localStorage.setItem("userForm", JSON.stringify(this.userForm.value));
    this.router.navigate(['/toast-example']);

  }

}
