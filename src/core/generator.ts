import { GenerateResult } from "../interfaces/generateResponse.interface";
import httpStatus from "http-status";

export const generateResult = <T extends {}>({
  code,
  status,
  message,
  data,
  redirectUrl,
}: GenerateResult<T>) => {
  const result: GenerateResult<T> = {
    code,
    success: code === 200 || code === 201,
    status: status || (httpStatus[code] as string),
    message: message || (httpStatus[`${code}_MESSAGE`] as string),
    data,
    redirectUrl,
  };

  return result;
};
