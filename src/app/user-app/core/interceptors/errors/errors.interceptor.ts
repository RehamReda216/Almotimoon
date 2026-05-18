import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from '../../../../shared/services/errorHandling/error-handling.service';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlingService = inject(ErrorHandlerService);
  return next(req).pipe(
    catchError((error) => {
      const message = errorHandlingService.getErrorMessage(error);
      console.log(error);

      return throwError(() => ({
        message,
        originalError: error,
      }));
    }),
  );
};
