import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlvisibleService {
  popupVisible = signal<boolean>(false);
  constructor() {}
}
