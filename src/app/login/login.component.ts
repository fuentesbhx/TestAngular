import { Component } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerForm: any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    } else {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.login();
    }
  }

  get f() { return this.registerForm.controls; }

  login() {
    if(this.f.email.value && this.f.password.value) {
      const objUser = {'email': this.f.email.value, 'password': this.f.password.value};
      this.authService.login(objUser);
      this.router.navigate(['home']);
    }
  }
}
