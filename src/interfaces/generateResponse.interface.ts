export interface GenerateResponse<T> {
  code: number;
  success?: boolean;
  status?: string;
  message?: string;
  redirectUrl?: string;
  data?: T;
}
