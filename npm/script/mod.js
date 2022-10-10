"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.p = exports.pogParseTailwindClasses = exports.pog = exports.Pog = exports.modifiers = exports.atoms = void 0;
const Pog_js_1 = require("./src/Pog.js");
const modifiers_js_1 = require("./src/modifiers.js");
const atoms_js_1 = require("./src/atoms.js");
const index_js_1 = __importDefault(require("./src/tailwind/index.js"));
exports.atoms = atoms_js_1.atoms;
exports.modifiers = modifiers_js_1.modifiers;
exports.Pog = Pog_js_1.Pog;
exports.pog = new Pog_js_1.Pog(modifiers_js_1.modifiers, atoms_js_1.atoms);
exports.pogParseTailwindClasses = index_js_1.default;
exports.p = exports.pog.parse;
console.log((0, exports.p)(['bg-red-500 text-white md:(font-bold hover:(text-xl) text-2xl p-4) rounded-md', {
        hover: 'hover'
    }]));
