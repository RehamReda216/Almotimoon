/**
 * Global API envelope used by all endpoints.
 */
export interface ApiResponse<T> {
  status_code: number;
  message: string;
  data: T;
  has_pagination: boolean;
  pagination_data?: PaginationData;
}

export interface PaginationData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}

/** Paginated list responses where `data` is an array and `pagination_data` is present. */
export type PaginatedApiResponse<T> = ApiResponse<T[]> & {
  has_pagination: true;
  pagination_data: PaginationData;
};

export type ApiVoidResponse = ApiResponse<null>;
