import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private formBuilder: FormBuilder, private user: UserService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);

    let reqData = {
      Email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.user.login(reqData).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem("token",response.data);
      if(localStorage.getItem('token') != null || response != null)
      {
        this.snackbar.open("Login Successfully","",{
          duration:2000,
        });
        this.router.navigate(['/home']);
      }
    })

  }
}
