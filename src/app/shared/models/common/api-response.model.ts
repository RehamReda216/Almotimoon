/**
 * Global API envelope used by all endpoints.
 */
export interface ApiResponse<T> {
  status_code: number;
  message: string;
  data: T;
  has_pagination: boolean;
}

export type ApiVoidResponse = ApiResponse<null>;
