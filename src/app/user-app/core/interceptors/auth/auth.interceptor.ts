import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { LocalstorageService } from '../../../../shared/services/loacalstorage/localstorage.service';
import { AuthService } from '../../../features/auth/service/auth.service';
import { ApiResponse } from '../../../../shared/models/common/api-response.model';

interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludedUrls = ['/login', '/register', '/refresh-token'];
  if (excludedUrls.some((url) => req.url.includes(url))) {
    return next(req);
  }

  const router = inject(Router);
  const localstorage = inject(LocalstorageService);
  const authService = inject(AuthService);
  const accessToken = localstorage.getValue<string>('access_token');

  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status !== 401) {
        return throwError(() => error);
      }

      return authService.getAccessToken().pipe(
        switchMap((res) => {
          const tokens = (res as ApiResponse<AuthTokens>)?.data;
          const newAccessToken = tokens?.accessToken;

          if (!newAccessToken) {
            authService.clearSession();
            router.navigate(['/auth/login']);
            return throwError(() => error);
          }

          localstorage.storeValue('access_token', newAccessToken);
          if (tokens.refreshToken) {
            localstorage.storeValue('refresh_token', tokens.refreshToken);
          }

          return next(
            req.clone({
              setHeaders: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            }),
          );
        }),
        catchError((refreshError) => {
          authService.clearSession();
          router.navigate(['/auth/login']);
          return throwError(() => refreshError);
        }),
      );
    }),
  );
};
