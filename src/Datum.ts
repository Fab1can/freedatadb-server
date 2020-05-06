const {InvalidUserError, InvalidLabelError, InvalidModelError, InvalidDatetimeError, ModelMismatchError} = require("./errors.js");
const {Model} = require("./Model.js");
const {Value} = require("./Value.js");

class Datum {
  label : string;
  model : Model;
  user : Datum;
  datetime : Date;

  constructor(label : string, model : Model, user? : Datum, datetime : Date = new Date()) {
    this.label = label;
    this.model = model;

    if(user != undefined && !user.model.descend("User")){
      throw new ModelMismatchError();
    }else{
      this.user = user;
    }

    this.datetime = datetime;

    this.data = [];
  }

  set(key, value){
    if(!(value instanceof Value)){
      throw new InvalidValueError();
    }
    if(key in this.data){
      if(this.data[key].type==value.type){
        this.data[key] = value;
      }else{
        throw new TypeMismatchError();
      }
    }
  }
}
