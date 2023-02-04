import { GenerateResponse } from "../interfaces/generateResponse.interface";
import httpStatus from "http-status";
/**
 * @remarks
 * This method is part of the {@link [handlin package]( https://www.npmjs.com/package/handlin)}.
 *
 * @param code - A http response code that should be sent
 * @param status - Boolean value indicating success/failure (OPTIONAL)
 * @param message - Message of the response (OPTIONAL)
 * @param data - Data that should be attached to the response (OPTIONAL)
 * @param redirectUrl - Url where the user will be redirected with reponse if provided (OPTIONAL)
 *
 *
 * @returns Returns generated response object ready to be handled in controller
 *
 */
export const generateResponse = <T extends {}>({
  code,
  status,
  message,
  data,
  redirectUrl,
}: GenerateResponse<T>) => {
  const response: GenerateResponse<T> = {
    code,
    success: code >= 200 && code <= 299,
    status: status || (httpStatus[code] as string),
    message: message || (httpStatus[`${code}_MESSAGE`] as string),
    data,
    redirectUrl,
  };

  return response;
};
