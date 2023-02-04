import { GenerateResponse } from "../interfaces/generateResponse.interface";
import { Response } from "express";

/**
 * @remarks
 * This method is part of the {@link [handlin package]( https://www.npmjs.com/package/handlin)}.
 *
 * @param response - A response object retrived from GenerateResponse method in service.ts file
 * @param res - Express request object.
 *
 *
 * @returns Returns a json response back to the client
 *
 */
export const handleResponse = (
  response: GenerateResponse<{} | undefined>,
  res: Response
) => {
  if (response.redirectUrl) {
    return res
      .set({
        "Access-Control-Allow-Credentials": true,
      })
      .status(301)
      .redirect(response.redirectUrl);
  }
  return res.status(response.code).json({
    success: response.success,
    code: response.code,
    data: response.data,
    status: response.status,
    message: response.message,
  });
};
