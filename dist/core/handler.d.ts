import { GenerateResult } from "../interfaces/generateResponse.interface";
import { Request, Response } from "express";
export declare const handleResult: (result: GenerateResult<{} | undefined>, req: Request, res: Response) => void | Response<any, Record<string, any>>;
