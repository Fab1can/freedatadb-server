import { Datum } from "./Datum";
import { ModelMismatchError } from "./errors";

export enum Primitive {
  Integer, Text, Date, Time, DateTime, Decimal, YesNo
}

export class Quantity {
  private _name : string;
  private _primitive : Primitive;
  private _user : Datum | undefined;
  private _datetime : Date;

  constructor(name : string, primitive : Primitive, user? : Datum, datetime : Date = new Date()) {
    this._name = name;
    this._primitive = primitive;

    if(user != undefined && !user.model.descend("User")){
      throw new ModelMismatchError();
    }else{
      this._user = user;
    }

    this._datetime = datetime;
  }

  public get name() : string {
    return this._name;
  }

  public get primitive() : Primitive {
    return this._primitive;
  }
}
