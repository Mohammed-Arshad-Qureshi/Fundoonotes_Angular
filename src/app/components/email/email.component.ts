import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  emailForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.emailForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.emailForm.invalid) {
      return;
    }
    let reqData = {
      Email: this.emailForm.value.email,
    }
    console.log(reqData);
    this.user.email(reqData).subscribe((response: any) => {
    })

  }
}





