import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../../features/auth/service/auth.service';
import { LocalstorageService } from '../../../../shared/services/loacalstorage/localstorage.service';
import { AppToastrService } from '../../../../shared/services/toastr/app-toastr.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, ButtonComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private localStorage: LocalstorageService,
    private toastr: AppToastrService,
    private router: Router,
  ) {}
  isOpened: boolean = false;
  applyNavToggle() {
    this.isOpened = !this.isOpened;
  }
  logout() {
    const refresh_token = this.localStorage.getValue('refresh_token');
    this.authService.logout({ refreshToken: refresh_token }).subscribe({
      next: (res) => {
        this.localStorage.removeValue('access_token');
        this.localStorage.removeValue('refresh_token');
        this.toastr.displayToastr('تم تسجيل الخروج بنجاح', 'success');
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.error('Logout error:', err);
        this.toastr.displayToastr(
          err.message || 'يوجد خطأ أثناء عملية تسجيل الخروج',
          'error',
        );
      },
    });
  }
}
