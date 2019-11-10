import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  updateUserProfile() {

  }

  userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  updateProfile() {
    this.userForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    console.warn(this.userForm.value);
  }
}
