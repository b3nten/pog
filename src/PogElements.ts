import { Pog } from './Pog.ts'

class PogElements<M extends string, A extends string> extends Pog<M, A> {
    private isAtom(atom: A) {
      if (typeof atom !== "string") {
        throw new Error("Typeof atom !== string");
      }
      if (this.atoms.has(atom)) {
        return true;
      }
      if(this.atoms.has(atom.substring(0, atom.indexOf('-')))){
      }
      return false;
    }
  
    private isModifier(modifier: M) {
      if (typeof modifier !== "string") {
        throw new Error("Typeof modifier !== string");
      }
      if (this.modifiers.has(modifier)) {
        return true;
      }
      return false;
    }
  
    parseProps(props: Record<string, unknown>) {
      const acc: string[] = [];
  
      for (const [key, value] of Object.entries(props)) {
        if(typeof value === boolean && ){
  
        }
      }
      return acc;
    }
  }