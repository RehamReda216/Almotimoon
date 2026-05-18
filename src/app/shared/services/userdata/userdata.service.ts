import { Injectable, signal } from '@angular/core';
import { LocalstorageService } from '../loacalstorage/localstorage.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  private $userDataSignal = signal<{}>({});
  readonly $userData = this.$userDataSignal.asReadonly();
  constructor(private _Localstorage: LocalstorageService) {}
  tokenDecoding() {
    const userData = this._Localstorage.getValue('access_token');
    // Perform token decoding logic here
    if (!userData) {
      return null;
    }
    const decodedData = jwtDecode(userData);
    console.log(decodedData);

    return decodedData;
  }
  setUserData() {
    const userData = this.tokenDecoding();
    if (!userData) {
      return;
    }
    this.$userDataSignal.set(userData);
  }
}
