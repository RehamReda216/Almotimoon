export interface TableExportRequest {
  format?: 'xlsx' | 'pdf';
  columns?: string[];
  filters?: Record<string, string | number | boolean | null | undefined>;
  sort?: Record<string, string>;
}
