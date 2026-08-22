import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from '../../service/auth.service';
import { AppToastrService } from '../../../../../shared/services/toastr/app-toastr.service';
import { finalize } from 'rxjs';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    RouterLink,
    NgxSpinnerComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isLoading = signal<boolean>(false);
  isOpenedSpinner = signal<boolean>(false);
  registerForm!: FormGroup;
  errorLoginMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private _Router: Router,
    private authService: AuthService,
    private toastr: AppToastrService,
  ) {}
  ngOnInit(): void {
    // ============ Initailize form group:
    this.registerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      phone_number: [
        null,
        [Validators.required, Validators.pattern(/^\d{11}$/)],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/),
        ],
      ],
    });
  }
  registerOperation() {
    const formValues = this.registerForm.value;
    if (this.registerForm.invalid || this.isLoading()) {
      this.toastr.displayToastr('يرجى ملء جميع الحقول بشكل صحيح', 'error');
      return;
    }
    this.isLoading.set(true);
    // console.log(this.registerForm);
    this.authService
      .register(formValues)
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
          this.registerForm.reset();
        }),
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.toastr.displayToastr('تم إنشاء الحساب بنجاح', 'success');
            this.isOpenedSpinner.set(true);
            setTimeout(() => {
              this._Router.navigate(['/auth/login']);
              this.isOpenedSpinner.set(false);
            }, 2000);
          }
        },
        error: (err) => {
          console.log(err);
          this.toastr.displayToastr(
            err.message || 'يوجد خطأ أثناء عملية التسجيل',
            'error',
          );
        },
      });
  }
}
