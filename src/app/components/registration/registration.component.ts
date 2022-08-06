import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
     }
    
    let reqData = {
      FirstName: this.registerForm.value.firstName,
      LastName: this.registerForm.value.lastName,
      Email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
    console.log(reqData);
    this.user.registration(reqData).subscribe((response : any) => {
      console.log(response);
      
    }
  )    // display form values on success
  }
}