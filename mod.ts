import { Pog as _Pog } from './src/Pog.ts'
import { modifiers } from "./src/modifiers.ts";
import { atoms } from "./src/atoms.ts";

export const Pog = _Pog

export const pog = new _Pog(modifiers, atoms);

export const p = pog.parseObject


