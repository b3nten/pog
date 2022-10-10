import { Pog as _Pog } from "./src/Pog.js";
import { modifiers as _modifiers } from "./src/modifiers.js";
import { atoms as _atoms } from "./src/atoms.js";
import {default as _pogParseTailwindClasses} from "./src/tailwind/index.js"

export const atoms = _atoms;
export const modifiers = _modifiers;

export const Pog = _Pog;

export const pog = new _Pog(_modifiers, _atoms);

export const pogParseTailwindClasses = _pogParseTailwindClasses;

export const p = pog.parse
console.log(p(['bg-red-500 text-white md:(font-bold hover:(text-xl) text-2xl p-4) rounded-md', {
    hover: 'hover'
}]))

