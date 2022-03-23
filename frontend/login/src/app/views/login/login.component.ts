import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserCreation } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userForm!: FormGroup;
  public loginForm!: FormGroup;

  constructor(
    //private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nameControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required]),
      passwordConfirmationControl: new FormControl('', [Validators.required])
    });

    this.loginForm = this.formBuilder.group({
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required]),
    });
  }

  salvar() {
    if(this.userForm.valid){
       this.userService.createUser({
        name: this.userForm.get('nameControl')?.value,
        email: this.userForm.get('emailControl')?.value,
        password: this.userForm.get('passwordControl')?.value,
        passwordConfirmation: this.userForm.get('passwordConfirmationControl')?.value,
       }).pipe(
        tap(() => this.router.navigate([]))
      ).subscribe();
    }
  }

  login(){
    this.router.navigate(['list'])
  }

}
