import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from '../../../../shared/services/errorHandling/error-handling.service';
import { Router } from '@angular/router';
export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlingService = inject(ErrorHandlerService);
  const router = inject(Router);
  return next(req).pipe(
    catchError((error) => {
      console.log(error);
      const operatedError = errorHandlingService.handleError(error);
      // const message = errorHandlingService.getErrorMessage(error);
      if (error.status === 403) {
        router.navigate(['/forbidden']);
      } else if (error.status === 404) {
        router.navigate(['/not-found']);
      }
      return throwError(() =>
        operatedError
          ? operatedError
          : { message: error.message, originalError: error.originalError || error },
      );
    }),
  );
};
