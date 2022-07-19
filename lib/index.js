"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeStringToBigInt = exports.createPoseidonHash = exports.buildPoseidonReference = exports.buildPoseidonOpt = exports.buildPoseidon = void 0;
// @ts-ignore
const circomlibjs_1 = require("circomlibjs");
Object.defineProperty(exports, "buildPoseidon", { enumerable: true, get: function () { return circomlibjs_1.buildPoseidon; } });
Object.defineProperty(exports, "buildPoseidonOpt", { enumerable: true, get: function () { return circomlibjs_1.buildPoseidonOpt; } });
Object.defineProperty(exports, "buildPoseidonReference", { enumerable: true, get: function () { return circomlibjs_1.buildPoseidonReference; } });
const poseidon_1 = require("./poseidon");
Object.defineProperty(exports, "createPoseidonHash", { enumerable: true, get: function () { return poseidon_1.createPoseidonHash; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "encodeStringToBigInt", { enumerable: true, get: function () { return utils_1.encodeStringToBigInt; } });
