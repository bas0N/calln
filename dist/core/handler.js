"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResult = void 0;
const handleResult = (result, req, res) => {
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
exports.handleResult = handleResult;
//# sourceMappingURL=handler.js.map