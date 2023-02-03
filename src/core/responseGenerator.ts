import { GenerateResponse } from "../interfaces/generateResponse.interface";
import httpStatus from "http-status";

export const generateResponse = <T extends {}>({
  code,
  status,
  message,
  data,
  redirectUrl,
}: GenerateResponse<T>) => {
  const response: GenerateResponse<T> = {
    code,
    success: code === 200 || code === 201,
    status: status || (httpStatus[code] as string),
    message: message || (httpStatus[`${code}_MESSAGE`] as string),
    data,
    redirectUrl,
  };

  return response;
};
