import { Component, Input, signal } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { AuthService } from '../../../user-app/features/auth/service/auth.service';
import { ControlvisibleService } from '../../services/visibility/controlvisible.service';

@Component({
  selector: 'app-loginwith',
  imports: [],
  templateUrl: './loginwith.component.html',
  styleUrl: './loginwith.component.css',
})
export class LoginwithComponent {
  @Input() providerName: string = '';
  constructor(
    private authService: AuthService,
    private controlVisible: ControlvisibleService,
  ) {}
  loginWithProvider() {
    this.controlVisible.popupVisible.set(true);
    console.log('loginwith' + this.providerName);
    // if (this.providerName === 'Google') {
    //   console.log(GoogleLoginProvider.PROVIDER_ID);
    //   this.authService.signInWithGoogle().subscribe((response) => {
    //     console.log('Google login response:', response);
    //   });
    // }
  }
}
