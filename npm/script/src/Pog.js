"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pog = void 0;
class Pog {
    constructor(modifiers, atoms) {
        Object.defineProperty(this, "modifiers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "atoms", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.modifiers = modifiers;
        this.atoms = atoms;
        this.parse = this.parse.bind(this);
    }
    // this method takes a string with groups and returns a formatted string
    formatString(str) {
        let content = str.replace(/\s\s+/g, " ").trim();
        const regexClassGroup = /((?:[!\w+:_/-]|\[&?>?:?.*\])+?)([:-])\(((?:[~!\w\s:/\\,%#.$-]|\[.*?\])*?)\)/gm;
        const seperators = ["-", ":"];
        let depth = 5;
        regexClassGroup.lastIndex = 0;
        let hasChanged = false;
        do {
            const before = content;
            content = content.replace(regexClassGroup, (from, pre, sep, body) => {
                if (!seperators.includes(sep))
                    return from;
                return body
                    .split(/\s/g)
                    .filter(Boolean)
                    .map((i) => i === "~" ? pre : i.replace(/^(!?)(.*)/, `$1${pre}${sep}$2`))
                    .join(" ");
            });
            hasChanged = content !== before;
            depth -= 1;
        } while (hasChanged && depth);
        return content;
    }
    // This method adds the key to each value in the string and returns a string
    addKeyToString(key, value, modifier = true) {
        return (key +
            (key.length ? (modifier ? ":" : "-") : '') +
            this.formatString(value).replace(/\s+/g, " " + key + (key.length ? (modifier ? ":" : "-") : '')));
    }
    formatArray(arr) {
        const acc = [];
        for (const element of arr) {
            if (typeof element === "string") {
                acc.push(this.formatString(element));
            }
            else if (element && typeof element === "object") {
                acc.push(this.parse(element));
            }
        }
        return acc.join(" ");
    }
    // This method adds the key to each item in the array and returns a string
    addKeyToArray(key, arr, modifier = true) {
        const acc = [];
        for (const element of arr) {
            if (typeof element === "string") {
                acc.push(this.addKeyToString(key, element));
            }
            else if (element && typeof element === "object") {
                acc.push(key + (key.length ? (modifier ? ":" : "-") : '') + this.parse(element));
            }
        }
        return acc.join(" ");
    }
    parse(content, modifier = true) {
        // if the content is a string, return the formatted string
        if (typeof content === "string")
            return this.formatString(content);
        // if the content is an array, return the formatted array
        if (Array.isArray(content))
            return this.formatArray(content);
        // if the content is not an object, return an empty string as we don't know what to do with it
        if (typeof content !== "object")
            return "";
        const acc = [];
        for (const [key, value] of Object.entries(content)) {
            // if the value is false, skip it
            if (!value)
                continue;
            // if the value is a string, add the key to the string and push it to the accumulator
            if (typeof value === "string") {
                acc.push(this.addKeyToString(key, value));
                continue;
            }
            // if the value is an array, add the key to the array and push it to the accumulator
            if (Array.isArray(value)) {
                acc.push(this.addKeyToArray(key, value));
                continue;
            }
            // if the value is an object, add the key to the object and push it to the accumulator
            if (typeof value === "object") {
                acc.push(key + (modifier ? ":" : "-") + this.parse(value));
                continue;
            }
        }
        // return the accumulator joined by spaces
        return acc.join(" ");
    }
}
exports.Pog = Pog;
