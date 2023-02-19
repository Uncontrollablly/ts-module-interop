"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = __importDefault(require("./a"));
// import b from "./b"; // File 'src/b.ts' is not a module.ts(2306)
const b = require("./b");
const c_1 = __importDefault(require("./c"));
const c1 = require("./c");
console.log(a_1.default);
b(123);
(0, c_1.default)(456);
c1(789);
