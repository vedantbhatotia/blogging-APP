"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlog = exports.CreateBlog = exports.SignInInput = exports.SignUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SignUpInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(3),
    name: zod_1.default.string()
});
exports.SignInInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(3),
    name: zod_1.default.string()
});
exports.CreateBlog = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.UpdateBlog = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.number()
});
