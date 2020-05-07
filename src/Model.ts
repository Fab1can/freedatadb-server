import { Attribute } from "./Attribute";

export class Model {
  private _name : string;
  private _attributes : Record<string,Attribute>;
  private _parents : Model[];

  constructor(name : string, attributes : Record<string,Attribute>, parents : Model[] = []) {
    this._name = name;
    this._attributes = attributes;
    this._parents = parents;
  }

  public get name() : string {
    return this._name;
  }

  public descend(modelName : string){
    if(this.name==modelName){
      return true;
    }else{
      for (var i = 0; i < this._parents.length; i++) {
        if(this._parents[i].descend(modelName)){
          return true;
        }
      }
    }
    return false;
  }
}
