const {InvalidUserError, InvalidLabelError, InvalidModelError, InvalidDatetimeError, ModelMismatchError} = require("./errors.js");
const {Model} = require("./Model.js");
const {Value} = require("./Value.js");

class Datum {
  constructor(label, model, user, datetime) {
    if(label == undefined){
      throw new UndefinedLabelError();
    }else{
      this.label = label;
    }

    if(!(model instanceof Model)){
      throw new InvalidModelError();
    }else{
      this.model = model;
    }

    if(!(datetime instanceof Date)){
      throw new InvalidDatetimeError();
    }else{
      this.datetime = datetime;
    }

    if(!(user instanceof Datum)){
      throw new InvalidUserError();
    }else if(!user.model.descend("User")){
      throw new ModelMismatchError();
    }else{
      this.user = user;
    }

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
