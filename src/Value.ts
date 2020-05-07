import { Quantity } from "./Quantity";
import { Datum } from "./Datum";
import { ModelMismatchError } from "./errors";

export class Value {
  private _value : any;
  private _quantity : Quantity;
  private _user : Datum | undefined;
  private _datetime : Date;
  private _source : string;

  constructor(value : any, quantity : Quantity, user? : Datum, datetime : Date = new Date(), source : string = "") {
    this._value = quantity.clean(value);
    this._quantity = quantity;

    if(user != undefined && !user.model.descend("User")){
      throw new ModelMismatchError();
    }else{
      this._user = user;
    }

    this._datetime = datetime;
    this._source = source;
  }

  public get value() : any {
    return this._value;
  }

  public get quantity() : Quantity {
    return this._quantity;
  }
}
