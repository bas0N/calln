import { GenerateResult } from "../interfaces/generateResult.interface";
import { Request, Response } from "express";

export const handleResult = (
  result: GenerateResult<{} | undefined>,
  req: Request,
  res: Response
) => {
  if (result.redirectUrl) {
    return res
      .set({
        "Access-Control-Allow-Credentials": true,
      })
      .status(result.code)
      .redirect(result.redirectUrl);
  }
  return res.status(result.code).json({
    success: result.code === 200 || result.code === 201,
    code: result.code,
    data: result.data,
    status: result.status,
    message: result.message,
  });
};
