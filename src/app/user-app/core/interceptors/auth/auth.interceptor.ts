import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalstorageService } from '../../../../shared/services/loacalstorage/localstorage.service';
import { catchError, finalize, of, switchMap, throwError } from 'rxjs';
import { AuthService } from '../../../features/auth/service/auth.service';
import { Router } from '@angular/router';
// subscribe() = EXECUTE the request, get the result in a callback
// pipe() = TRANSFORM the stream BEFORE anyone subscribes
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludedUrls = ['/login', '/register'];
  if (excludedUrls.some((url) => req.url.includes(url))) {
    return next(req);
  }
  const router = inject(Router);
  const localstorage = inject(LocalstorageService);
  const authService = inject(AuthService);
  const access_token = localstorage.getValue('access_token');
  const refresh_token = localstorage.getValue('refresh_token');
  if (access_token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.log('status is 401');

        localstorage.storeValue('access_token', null);
        localstorage.storeValue('refresh_token', null);
        return authService.getAccessToken(refresh_token as string).pipe(
          switchMap((newToken: any) => {
            console.log(newToken, 'but we got a new one');
            localstorage.storeValue('access_token', newToken);

            const clonedReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`,
                'Content-Type': 'application/json',
              },
              withCredentials: true,
            });
            return next(clonedReq);
          }),
          catchError((refreshError) => {
            // authService.logout();
            router.navigate(['/auth/login']);
            return throwError(() => refreshError);
          }),
        );
      }

      return throwError(() => error);
    }),
  );
};
