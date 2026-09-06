import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from '../../../features/auth/service/auth.service';
import { UserdataService } from '../../../../shared/services/userdata/userdata.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, ButtonComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly userDataService = inject(UserdataService);
  private readonly router = inject(Router);

  readonly isLoggedIn = this.userDataService.isLoggedIn;
  isOpened = false;

  applyNavToggle(): void {
    this.isOpened = !this.isOpened;
  }

  logout(): void {
    this.authService
      .logout()
      .pipe(catchError(() => of(null)))
      .subscribe(() => {
        this.router.navigate(['/auth/login']);
      });
  }
}
