"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResult = void 0;
const http_status_1 = __importDefault(require("http-status"));
const generateResult = ({ code, status, message, data, redirectUrl, }) => {
    const result = {
        code,
        success: code === 200 || code === 201,
        status: status || http_status_1.default[code],
        message: message || http_status_1.default[`${code}_MESSAGE`],
        data,
        redirectUrl,
    };
    return result;
};
exports.generateResult = generateResult;
//# sourceMappingURL=generator.js.map