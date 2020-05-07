const {InvalidDatumError, InvalidModelError, InvalidDatetimeError, ModelMismatchError} = require("./errors.js");
const {Type} = require("./Type.js");
const {Datum} = require("./Datum.js");

class Value {
  constructor(value, type, user, datetime, source) {
    if(!(type instanceof Type)){
      throw new InvalidModelError();
    }else{
      this.type = type;
    }

    if(value == undefined){
      throw new UndefinedValueError();
    }else if(typeof(value)!=type.primitive){
      throw new ValuePrimitiveMismatchError();
    }else{
      this.value = value;
    }

    if(!(datetime instanceof Date)){
      throw new InvalidDatetimeError();
    }else{
      this.datetime = datetime;
    }

    if(!(user instanceof Datum)){
      throw new InvalidDatumError();
    }else if(user.model.name != "User"){
      throw new ModelMismatchError();
    }else{
      this.user = user;
    }
  }
}
