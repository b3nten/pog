import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import * as t from "@babel/types";
import { p } from "../../mod.js";
export default function pogParseTailwindClasses(code, config) {
    const identifier = config?.indentifier || "pog";
    const ast = parse(code, {
        plugins: ["jsx", "typescript"],
        errorRecovery: true,
    });
    traverse(ast, {
        enter(path) {
            if (path.isCallExpression() && path.node.callee.name === identifier) {
                const value = generate(path.node.arguments[0], code).code;
                // set arguments[0] to the return of parse function
                path.node.arguments[0] = t.valueToNode(p(value));
            }
        },
    });
    return generate(ast, code);
}
