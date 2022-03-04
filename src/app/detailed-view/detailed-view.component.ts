import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserResponseModel } from '../user-response-model.model';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnInit {
  id: any;
  user:UserResponseModel= {
    id: undefined,
    name: undefined,
    email: undefined,
    password: undefined,
    mobileNumber: undefined,
    dob: undefined,
    contacts: []
  };
  constructor(
    private activatedRoute: ActivatedRoute, // browser ko url ma kun activate ax vanerra herne
    private userservice : UserService,
    // private location: Location
  ) {}

  getId() {
    this.activatedRoute.params.subscribe((params) => (this.id=params ['id']));
  }


  ngOnInit(): void {
    this.getId();
    this.userservice.viewUsersById(this.id).subscribe((res)=> {
      console.log('param:', res);
      this.user = res;
    }
    );
  }
  }
