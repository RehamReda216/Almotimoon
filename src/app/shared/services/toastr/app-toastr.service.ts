import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AppToastrService {
  constructor(private toastr: ToastrService) {}
  displayToastr(message: string, type: string) {
    switch (type) {
      case 'success':
        this.toastr.success(message, 'نجاح');
        break;
      case 'error':
        this.toastr.error(message, 'خطأ');
        break;
      case 'warning':
        this.toastr.warning(message, 'تحذير');
        break;
      case 'info':
        this.toastr.info(message, 'معلومة');
        break;
      default:
        this.toastr.show(message, 'إشعار');
        break;
    }
  }
}
