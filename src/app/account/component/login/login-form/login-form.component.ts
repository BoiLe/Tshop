import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
export interface userDTO {
  phoneNumber: string,
  password: string,
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  host: { class: 'w-1/2 bg-white border border-neutral-2-200 shadow-xl p-8' },
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup
  loginWithPasswordData: userDTO = {phoneNumber: '', password: ''}
  submitted = false;
 constructor(
              private fb: FormBuilder,
              private account: AccountService,
              private router: Router 
            ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10}$/i)])],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return; 
    }
    
    
   
  }
  loginWithPassword() {
    const model =this.perModel()
    this.account.login(model).subscribe(
      (res:any)  => {
          localStorage.setItem('accessToken', res.accessToken)
          this.router.navigate(['/account/store'])
          alert('Đăng nhập thành công!!');
        },
      err => alert('Đăng nhập thất bại !!')
    )
  }
  perModel() {
    if (this.loginForm.value.phoneNumber) {
      this.loginWithPasswordData.phoneNumber = this.loginForm.value.phoneNumber
    }
    if (this.loginForm.value.password) {
      this.loginWithPasswordData.password = this.loginForm.value.password
    }
    return this.loginWithPasswordData;
  }
}
