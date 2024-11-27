import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  continueAction = 'username';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['emilys', [Validators.required]],
      password: ['emilyspass', [Validators.required]],
    });
  }

  handleContinue() {
    this.continueAction = 'password';
  }

  signIn() {
    this.authService.signIn(this.form.value).subscribe((res) => {
      this.router.navigateByUrl('dashboard');
      localStorage.setItem('user', JSON.stringify(res))
      this.toastr.success('Succes', 'Login Successful');
    }, err => {
      this.toastr.error('Error', err.message);
    });
  }
}
