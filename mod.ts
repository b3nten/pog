import { Pog as _Pog } from "./src/Pog.ts";
import { modifiers as _modifiers } from "./src/modifiers.ts";
import { atoms as _atoms } from "./src/atoms.ts";

export const atoms = _atoms;
export const modifiers = _modifiers;

export const Pog = _Pog;

export const pog = new _Pog(_modifiers, _atoms);

export const p = pog.parseObject;
