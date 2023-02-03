import { GenerateResult } from "../interfaces/generateResponse.interface";
export declare const generateResult: <T extends {}>({ code, status, message, data, redirectUrl, }: GenerateResult<T>) => GenerateResult<T>;
