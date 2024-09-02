"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.removerecommadationhistory = exports.getrecommadationhistory = exports.postrecommended = exports.notrecommended = exports.getsignuppass = exports.getloginpass = exports.getlogindetails = exports.postdetails = void 0;
var config_1 = require("../../config/config");
var postdetails = function (user_name, password, email) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, config_1.pool.query("insert into user_details(user_name,pass_word,email\n        ) \n                values($1,$2,$3)", [
                    user_name,
                    password,
                    email
                ])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.postdetails = postdetails;
var getlogindetails = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, config_1.pool.query("select * from user_details;")];
    });
}); };
exports.getlogindetails = getlogindetails;
var getloginpass = function (user_name, password) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, config_1.pool.query("select user_id,user_name,pass_word from user_details where user_name=$1 and pass_word=$2;", [user_name, password])];
    });
}); };
exports.getloginpass = getloginpass;
var getsignuppass = function (user_name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, config_1.pool.query("select user_name from user_details where user_name=$1;", [user_name])];
    });
}); };
exports.getsignuppass = getsignuppass;
var notrecommended = function (user_id, showID) { return __awaiter(void 0, void 0, void 0, function () {
    var flag;
    return __generator(this, function (_a) {
        flag = config_1.pool.query("select show_id from show_details where user_id = $1 and show_id = $2;", [user_id, showID]);
        return [2 /*return*/, flag.rows];
    });
}); };
exports.notrecommended = notrecommended;
var postrecommended = function (user_id, show_id, show_name, show_language, show_type) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, config_1.pool.query("insert into show_details(user_id,show_id,show_name,show_language,show_type) \n                          values($1,$2,$3,$4,$5)", [
                    user_id,
                    show_id,
                    show_name,
                    show_language,
                    show_type
                ])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.postrecommended = postrecommended;
var getrecommadationhistory = function (user_id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, config_1.pool.query("select * from show_details where user_id = $1;", [user_id])];
    });
}); };
exports.getrecommadationhistory = getrecommadationhistory;
var removerecommadationhistory = function (user_id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, config_1.pool.query("delete from show_details where user_id = $1;", [user_id])];
    });
}); };
exports.removerecommadationhistory = removerecommadationhistory;
