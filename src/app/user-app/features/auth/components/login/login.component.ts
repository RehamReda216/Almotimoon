import { HttpErrorResponse } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, delay, finalize, tap, throwError } from 'rxjs';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from '../../service/auth.service';
import { LocalstorageService } from '../../../../../shared/services/loacalstorage/localstorage.service';
import { AppToastrService } from '../../../../../shared/services/toastr/app-toastr.service';
import { UserdataService } from '../../../../../shared/services/userdata/userdata.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorLoginMessage: string = '';
  isLoading = signal<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private _Router: Router,
    private authService: AuthService,
    private localstorageService: LocalstorageService,
    private toastr: AppToastrService,
    private _userdataService: UserdataService,
  ) {}
  ngOnInit(): void {
    // ============ Initailize form group:
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  loginOperation() {
    if (this.loginForm.invalid || this.isLoading()) {
      return;
    }
    this.authService
      .login(this.loginForm.value)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (res: any) => {
          if (!res?.data?.accessToken || !res?.data?.refreshToken) {
            this.toastr.displayToastr(
              'يوجد خطأ في بيانات الاستجابة من الخادم',
              'error',
            );
            return;
          }
          this.localstorageService.storeValue(
            'access_token',
            res?.data?.accessToken,
          );
          this.localstorageService.storeValue(
            'refresh_token',
            res?.data?.refreshToken,
          );
          this.toastr.displayToastr('تم تسجيل الدخول بنجاح', 'success');
          this._userdataService.setUserData();
          this._Router.navigate(['/home']);
        },
        error: (err) => {
          this.toastr.displayToastr(
            err.message || 'يوجد خطأ أثناء عملية تسجيل الدخول',
            'error',
          );
        },
      });
  }
}
