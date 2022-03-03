import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {
  userResponse: any = [];

  // tableData = [
  //   {
  //     id: '001',
  //     name: 'Santosh Kalathoki',
  //     email: 'santosh@gmail.com',
  //     password: 'santosh123',
  //     mobileNumber: 9849589636
  //   },
  //   {
  //     id: '002',
  //     name: 'Hemraj Kalathoki',
  //     email: 'hemraj@gmail.com',
  //     password: 'hemraj123',
  //     mobileNumber: 9849780478
  //   },
  //   {
  //     id: '003',
  //     name: 'Sharad Khanal',
  //     email: 'sharad@gmail.com',
  //     password: 'sharad123',
  //     mobileNumber: 9866989498
  //   },
  //   {
  //     id: '004',
  //     name: 'Anita Khadka',
  //     email: 'anita@gmail.com',
  //     password: 'anita123',
  //     mobileNumber: 9866734198
  //   }
  // ];

  constructor(
    private router: Router,
    private userservice: UserService
  ) { }

  ngOnInit(): void {
     this.viewUsers();
  }

  // onDelete(){
  //   // this.userResponse.splice(i,;
  // }
  
  onAddUsers(){
    this.router.navigate(['/home/add-user'])
  }
  
  onView(id: number | undefined) {
    this.router.navigate(['/home/detailed-view', id]
    );

  }

  onEdit(id: any) {
    this.router.navigate(['/home/edit-users', id]
    
    );
  }
  
  viewUsers(){
    this.userservice.viewUser().subscribe(
      (response: any) =>{
        console.log(response)
        this.userResponse = response.users;
      
      },
      (error: any) =>{      
      console.error(error);
      }
    );
  }
   deleteUsers(id:any){
    if(confirm("Do you want to delete??")){
        this.userservice.deleteUsers(id).subscribe(
          
          (response: any) =>{
            console.log(response)
            this.viewUsers();
          },
          (error: any) =>{      
          console.error(error);
          });
    }
  }
     
  
}



