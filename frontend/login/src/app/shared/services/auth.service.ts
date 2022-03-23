import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserLogin, UserLoginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public endpointAdm: string = environment.urlApiAuth
  public controllerAdm: string = 'signin';

  constructor(private http: HttpClient, private snackbar: MatSnackBar, private jwtService: JwtHelperService) { }


  login(user: UserLogin): Observable<UserLoginResponse> {
    console.log(`${this.endpointAdm}/${this.controllerAdm}`);
    return this.http.post<UserLoginResponse>(`${this.endpointAdm}/${this.controllerAdm}`, user).pipe(
      tap((res: UserLoginResponse) => localStorage.setItem('token', res.token)),
      tap(() => this.snackbar.open('Login Successfull', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      }))
    );
  }

  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
