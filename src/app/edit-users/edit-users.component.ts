import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserResponseModel } from '../user-response-model.model';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup({});
  user : UserResponseModel = {
    id: undefined,
    name: undefined,
    email: undefined,
    password: undefined,
    mobileNumber: undefined,
    dob: undefined
  };
  id: any;
  constructor( 
    private userService : UserService,
    private formBuilder : FormBuilder,
    // private router : Router,
    private activatedRoute : ActivatedRoute
    
    ) { }

    getId(){
      this.activatedRoute.params.subscribe((param) => (this.id = param['id']));
    }

  ngOnInit(): void {
    this.getId();
    this.userService.viewUsersById(this.id).subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
    this.initForm();

   
  }
  initForm(){
    this.reactiveForm = this.formBuilder.group({
      name : this.user.name,
      email : this.user.email,
      password : this.user.password,
      mobileNumber : this.user.mobileNumber
    });
  }

  onUpdate(user:any){
    this.userService.updateUsers(this.id,user).subscribe(
      (response:any)=>{
        console.log(response);
        this.reactiveForm.reset();
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

}
