import { GenerateResponse } from "../interfaces/generateResponse.interface";
import { Request, Response } from "express";

export const handleResponse = (
  response: GenerateResponse<{} | undefined>,
  req: Request,
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
    success: response.code === 200 || response.code === 201,
    code: response.code,
    data: response.data,
    status: response.status,
    message: response.message,
  });
};
