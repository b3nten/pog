type TParseObject<T extends string> =
  & {
    [key in T]?: string | TParseObject<T> | Array<string | TParseObject<T>>;
  }
  & {
    [key: string]: string | TParseObject<T> | Array<string | TParseObject<T>>;
  };

type TParsePropsObject<T extends string> =
  & {
    [key in T]?:
      | string
      | TParseObject<T>
      | Array<string | TParseObject<T>>
      | boolean;
  }
  & {
    [key: string]:
      | string
      | TParseObject<T>
      | Array<string | TParseObject<T>>
      | boolean;
  };

export class Pog<M extends string, A extends string> {
  readonly modifiers: Set<M>;
  readonly atoms: Set<A>;

  constructor(modifiers: Set<M>, atoms: Set<A>) {
    this.modifiers = modifiers;
    this.atoms = atoms;
  }

  protected formatString(str: string) {
    return str.replace(/\s\s+/g, " ").trim();
  }

  // This method adds the key to each value in the string and returns a string
  protected parseString(key: string, value: string, modifier = true) {
    return (
      key +
      (modifier ? ":" : "-") +
      this.formatString(value).replace(
        /\s+/g,
        " " + key + (modifier ? ":" : "-"),
      )
    );
  }

  // This method adds the key to each item in the array and returns a string
  protected parseArray(
    key: string,
    arr: Array<string | Record<string, unknown>>,
    modifier = true,
  ) {
    const acc: string[] = [];
    for (const element of arr) {
      if (typeof element === "string") {
        acc.push(this.parseString(key, element));
      } else if (element && typeof element === "object") {
        acc.push(
          key +
            (modifier ? ":" : "-") +
            this.parseObject(element as TParseObject<M>),
        );
      }
    }
    return acc.join(" ");
  }

  parseObject(obj: TParseObject<M>, modifier = true) {
    // TODO: add error checking
    const acc: string[] = [];
    for (const [key, value] of Object.entries(obj)) {
      if (!value) continue;
      if (typeof value === "string") {
        acc.push(this.parseString(key, value));
        continue;
      }
      if (Array.isArray(value)) {
        acc.push(this.parseArray(key, value));
        continue;
      }
      if (typeof value === "object") {
        acc.push(
          key + (modifier ? ":" : "-") + this.parseObject(value as typeof obj),
        );
        continue;
      }
    }
    return acc.join(" ");
  }
}
