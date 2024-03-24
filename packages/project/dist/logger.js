"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const debug_1 = __importDefault(require("debug"));
class Logger {
    static debug(...args) {
        if (process.env.VERBOSE !== 'false') {
            (0, debug_1.default)("project:debug")(args);
        }
    }
    static v(source, operation, ...args) {
        (0, debug_1.default)(`project:${source}`)(operation, ...args);
    }
    static log(...args) {
        (0, debug_1.default)("project:log")(args);
    }
    static warn(...args) {
        (0, debug_1.default)("project:warn")(args);
    }
    static error(...args) {
        (0, debug_1.default)("project:error")(args);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map