import { parse } from "https://esm.sh/@babel/parser@7.19.3";
import traverse from "https://esm.sh/@babel/traverse@7.19.3";
import generate from "https://esm.sh/@babel/generator@7.19.3";
import * as t from "https://esm.sh/@babel/types@7.19.3";
import { p } from "../../mod.ts"

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
        path.node.arguments[0] = t.valueToNode(p(value), );
      }
    },
  });

  return generate(ast, code);
}