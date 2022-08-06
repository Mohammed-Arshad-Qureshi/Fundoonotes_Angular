import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    console.log(this.forgotPasswordForm.value);
  }
}
