// import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(
    private userService: UserService,
    private form: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.form.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
      mobileNumber: [undefined, Validators.required],
      dob: [undefined, Validators.required],
      age: [undefined],
      contacts : new FormArray([])

    });
    this.initContacts();
  }

  initContacts() {
    (this.userForm.get('contacts') as FormArray).push(
      this.form.group({
        mobileNumber:[undefined],
        id:[undefined],
        email:[undefined],
        userId: [undefined],
      })
    )
  }
  get getContactForm(): FormArray {
    return (this.userForm.get('contacts') as FormArray);
  }

  onAddUser(user: any) {
    this.submitted = true;
    if (this.userForm.valid) {
      this.userService.addUsers(user).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/home/users']);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    console.log(user);
  }
}
