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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGroth16Proof = void 0;
const snarkjs_1 = require("snarkjs");
const generateGroth16Proof = ({ witness, wasmFilePath, finalZKeyPath, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield snarkjs_1.groth16.fullProve(witness, wasmFilePath, finalZKeyPath);
});
exports.generateGroth16Proof = generateGroth16Proof;
