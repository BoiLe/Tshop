import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  host: { class: 'w-1/2 bg-white border border-neutral-2-200 shadow-xl p-8' },
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      taiKhoan: ['', Validators.required],
      matKhau: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);
  }

}
