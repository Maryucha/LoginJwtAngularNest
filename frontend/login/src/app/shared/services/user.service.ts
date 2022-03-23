import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  listAllUsers(): Observable<UserListItens[]> {
   return this.http.get<UserListItens[]>(`${this.endpoint}/${this.controller}`);
}

  createUser(user: UserCreation): Observable<UserCreation> {
    return this.http.post<User>(`${this.endpointAdm}/${this.controllerAdm}`, user).pipe(
      tap((user) => this.snackbar.open(`Usuário cadastrado com sucesso! ${user.name}`,'Close',{
       duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
     })),
     catchError(e => {
       this.snackbar.open(`User could not be created, due to: ${e.error.message}`, 'Close', {
         duration: 5000, horizontalPosition: 'right', verticalPosition: 'top'
       })
       return throwError(e);
     })
   )
 };

 removeUser(id: string){
    return this.http.delete(`${this.endpoint}/${this.controller}/${id}`).pipe(
      tap(() => this.snackbar.open(`Usuário removido com sucesso!`,'Close',{
       duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
     })),
     catchError(e => {
       this.snackbar.open(`User could not be created, due to: ${e.error.message}`, 'Close', {
         duration: 5000, horizontalPosition: 'right', verticalPosition: 'top'
       })
       return throwError(e);
     })
   )
 };
}
