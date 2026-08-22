import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

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

  handleError(error: HttpErrorResponse) {
    console.log(error, 'comes from handling');

    if (!navigator.onLine) {
      return {
        message: 'لا يوجد اتصال بالإنترنت',
        originalError: error,
      };
    }

    if (error.error?.message) {
      return {
        message: error.error.message,
        originalError: error,
      };
    }

    switch (error.status) {
      case 0:
        return {
          message: 'تعذر الاتصال بالخادم، حاول لاحقًا',
          originalError: error,
        };

      case 400:
      case 422:
        return {
          message: 'يوجد خطأ في البيانات المدخلة',
          originalError: error,
        };

      case 401:
        return {
          message: 'انتهت الجلسة أو يجب تسجيل الدخول',
          originalError: error,
        };

      case 403:
        return {
          message: 'ليس لديك صلاحية للوصول',
          originalError: error,
        };

      case 404:
        return {
          message: 'البيانات غير موجودة',
          originalError: error,
        };

      case 409:
        return {
          message: 'هذه البيانات موجودة بالفعل',
          originalError: error,
        };

      case 500:
      case 503:
        return {
          message: 'حدث خطأ في الخادم، حاول لاحقًا',
          originalError: error,
        };

      default:
        return {
          message: 'حدث خطأ غير متوقع',
          originalError: error,
        };
    }
  }
}
