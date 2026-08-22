import { Component } from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-googlepopup',
  imports: [],
  templateUrl: './googlepopup.component.html',
  styleUrl: './googlepopup.component.css',
})
export class GooglepopupComponent {
  clientID =
    '346302550055-3i5k3ki65767eamsu1209reoi9s77mik.apps.googleusercontent.com';
  ngOnInit() {
    google.accounts.id.initialize({
      client_id: this.clientID,
      callback: (response: any) => {
        console.log(response.credential); // token
      },
    });

    // google.accounts.id.renderButton(document.getElementById('google-btn'), {
    //   theme: 'outline',
    //   size: 'large',
    // });
  }
}
