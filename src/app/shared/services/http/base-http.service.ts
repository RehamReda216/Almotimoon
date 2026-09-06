import { Observable } from 'rxjs';
import { PaginationParams } from '../../models/common/paginated-response.model';
import { ApiVoidResponse } from '../../models/common/api-response.model';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';

/**
 * Shared CRUD for all resource services.
 *
 * Call sites pick the response type via generics:
 * - Migrated: `getAll<ApiResponse<Item>>()`, `getById<ApiResponse<Detail>>()`, …
 * - Legacy pages: keep current DTOs until each page is migrated to ApiResponse.
 *
 * Delete success is HTTP 204 (empty body).
 */
export abstract class BaseHttpService<T> {
  protected readonly baseUrl: string;

  protected constructor(
    protected http: HttpClient,
    apiBaseUrl: string,
  ) {
    this.baseUrl = `${apiBaseUrl}/${this.getResourceUrl()}`;
  }

  protected abstract getResourceUrl(): string;

  /**
   * GET /{resource}
   * Migrated: `getAll<ApiResponse<Item>>()`.
   * Legacy: `getAll<PaginatedResponse<Item>>()`.
   */
  getAll<R = T[]>(
    params?: PaginationParams,
    context?: HttpContext,
  ): Observable<R> {
    return this.http.get<R>(this.baseUrl, {
      params: this.buildPaginationHttpParams(params),
      context,
    });
  }

  /**
   * GET /{resource}/{id}
   * Migrated: `getById<ApiResponse<Detail>>()`.
   */
  getById<R = T>(
    id: string | number,
    context?: HttpContext,
  ): Observable<R> {
    return this.http.get<R>(`${this.baseUrl}/${id}`, { context });
  }

  /**
   * POST /{resource}
   * Migrated: `create<CreateBody, ApiResponse<CreateResult>>(body)`.
   */
  create<TBody = T, R = T>(
    body: TBody,
    context?: HttpContext,
  ): Observable<R> {
    return this.http.post<R>(this.baseUrl, body, { context });
  }

  /**
   * PUT /{resource}/{id}
   * Migrated: `update<UpdateBody, ApiVoidResponse>(id, body)`.
   */
  update<TBody = T, R = ApiVoidResponse>(
    id: string | number,
    body: TBody,
    context?: HttpContext,
  ): Observable<R> {
    return this.http.put<R>(`${this.baseUrl}/${id}`, body, { context });
  }

  /**
   * DELETE /{resource}/{id}
   * Example: DELETE /orders/{orderId}.
   */
  delete(id: string | number, context?: HttpContext): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { context });
  }

  protected buildPaginationHttpParams(
    params?: PaginationParams,
    initial?: HttpParams,
  ): HttpParams {
    let httpParams = initial ?? new HttpParams();
    if (params?.pageNumber) {
      httpParams = httpParams.set('pageNumber', params.pageNumber.toString());
    }
    if (params?.pageSize) {
      httpParams = httpParams.set('pageSize', params.pageSize.toString());
    }
    if (params?.search) {
      httpParams = httpParams.set('search', params.search);
    }
    if (params?.filters) {
      Object.keys(params.filters).forEach((key) => {
        const value = params.filters![key];
        if (value === undefined || value === '') {
          return;
        }
        if (value === null) {
          httpParams = httpParams.set(`filters[${key}]`, 'null');
          return;
        }
        httpParams = httpParams.set(`filters[${key}]`, String(value));
      });
    }
    if (params?.sort) {
      Object.keys(params.sort).forEach((key) => {
        const value = params.sort![key];
        if (value) {
          httpParams = httpParams.set(`sort[${key}]`, value);
        }
      });
    }
    return httpParams;
  }
}
