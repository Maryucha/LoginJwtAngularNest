import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserCreation, UserListItens } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //   http://localhost:3000/auth/signup

  //   http://localhost:3000/auth/signup

  public endpoint: string = environment.urlApi;
  public controller: string = 'users';

  public endpointAdm: string = environment.urlApiAuth
  public controllerAdm: string = 'signup';

  constructor(
    private http: HttpClient
  ) { }

  listAllUsers(): Observable<UserListItens[]> {
   return this.http.get<UserListItens[]>(`${this.endpoint}/${this.controller}`);
  }

  createUser(user: UserCreation) {
    return this.http.post<User>(`${this.endpointAdm}/${this.controllerAdm}`, user);
  }

 removeUser(id: string){
    return this.http.delete(`${this.endpoint}/${this.controller}/${id}`);
  }
}
