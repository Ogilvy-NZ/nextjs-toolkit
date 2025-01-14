"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBaseURL = () => {
    let baseURL = process.env.SILVERSTRIPE_BASE_URL;
    if (!baseURL) {
        throw new Error(`
        You must set SILVERSTRIPE_BASE_URL in your .env file,
        e.g. "https://my-ss-website.com"
    `);
    }
    return baseURL.replace(/\/+$/, ``);
};
exports.default = getBaseURL;
//# sourceMappingURL=getBaseURL.js.map