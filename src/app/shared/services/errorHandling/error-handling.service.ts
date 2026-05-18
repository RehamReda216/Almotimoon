import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  getErrorMessage(error: HttpErrorResponse): string {
    if (!navigator.onLine) {
      return 'لا يوجد اتصال بالإنترنت';
    }
    // console.log(error, 'uu');

    switch (error.status) {
      case 400:
        return 'هذا الايميل موجود مسبقا';
      case 401:
        return 'يجب تسجيل الدخول أولاً';

      case 403:
        return 'ليس لديك صلاحية للوصول';

      case 404:
        return 'البيانات غير موجودة';

      case 409:
        return 'هذه البيانات موجودة بالفعل';

      case 422:
        return 'يوجد خطأ في البيانات المدخلة';

      case 500:
        return 'حدث خطأ في السيرفر، حاول لاحقًا';

      case 503:
        return 'الخدمة غير متاحة حالياً';

      default:
        return 'حدث خطأ غير متوقع، حاول مرة أخرى';
    }
  }
}
