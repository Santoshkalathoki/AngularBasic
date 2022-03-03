import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponseModel } from '../user-response-model.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  onUpdate(userDetails: UserResponseModel, id: any) {
    throw new Error('Method not implemented.');
  }
  apiUrl: string = 'api/users';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  addUsers(user: UserResponseModel): Observable<UserResponseModel> {
    return this.httpClient.post<UserResponseModel>(this.baseUrl.concat(this.apiUrl), user);
  }

  viewUser(): Observable<UserResponseModel>{
    return this.httpClient.get<UserResponseModel>(this.baseUrl.concat(this.apiUrl));
  }

  viewUsersById(id:number): Observable<UserResponseModel> {
    return this.httpClient.get<UserResponseModel>(this.baseUrl.concat(this.apiUrl)+"/"+id )

  }
  deleteUsers(id:UserResponseModel): Observable<UserResponseModel> {
     return this.httpClient.delete<UserResponseModel>(this.baseUrl.concat(this.apiUrl)+"/"+id )
  }

  updateUsers(id:any, body:any): Observable<UserResponseModel> {
    const update = this.baseUrl.concat(this.apiUrl) + "/" +id;
    return this.httpClient.put<UserResponseModel>(update, body)
 }
}
