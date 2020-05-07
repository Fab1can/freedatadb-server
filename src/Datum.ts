import { Model } from "./Model";
import { Value } from "./Value";
import { ModelMismatchError, QuantityMismatchError } from "./errors";

export class Datum {
  private _label : string;
  private _model : Model;
  private _user : Datum | undefined;
  private _datetime : Date;
  private _data : Record<string,Value>;

  constructor(label : string, model : Model, user? : Datum, datetime : Date = new Date()) {
    this._label = label;
    this._model = model;

    if(user != undefined && !user.model.descend("User")){
      throw new ModelMismatchError();
    }else{
      this._user = user;
    }

    this._datetime = datetime;

    this._data = {};
  }

  public get model() : Model {
    return this._model;
  }

  set(key : string, value : Value){
    if(key in this._data){
      if(this._data[key].quantity.name==value.quantity.name){
        this._data[key] = value;
      }else{
        throw new QuantityMismatchError();
      }
    }
  }
}
