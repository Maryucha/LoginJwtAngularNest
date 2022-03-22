import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public endpoint: string = environment.urlApi;
  public controller: string = 'users';

  constructor(
    private http: HttpClient
  ) { }

  listAllUsers(): Observable<User[]> {
   return this.http.get<User[]>(`${this.endpoint}/${this.controller}`);
  }
}
