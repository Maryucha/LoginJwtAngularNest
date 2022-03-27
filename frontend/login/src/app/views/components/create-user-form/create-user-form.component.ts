import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  public userForm!: FormGroup;
  public photo: string = '';
  @ViewChild('UploadFileInput') uploadFileInput!: ElementRef;
  myfilename = 'Select File';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      nameControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required]),
      photoControl: new FormControl('', []),
      passwordConfirmationControl: new FormControl('', [Validators.required])
    });

  }

  salvar() {
    if (this.userForm.valid) {
      this.userService.createUser({
        name: this.userForm.get('nameControl')?.value,
        email: this.userForm.get('emailControl')?.value,
        password: this.userForm.get('passwordControl')?.value,
        photo: this.photo,
        passwordConfirmation: this.userForm.get('passwordConfirmationControl')?.value,
      }).pipe(
        tap(() => this.router.navigate(['container']))
      ).subscribe()
    }
    this.userForm.reset();
  }

  upload(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: any) => {
        this.myfilename += file.name;
      });
      this.photo += '../../../../assets/img/'+this.myfilename

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          // Return Base64 Data URL
          const imgBase64Path = e.target.result;

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
      this.userForm.patchValue({
        photoControl: this.photo
      })

    } else {
      this.myfilename = 'Select File';
    }
  }
}
