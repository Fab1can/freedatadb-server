const {InvalidModelError} = require("./errors.js");

class Model {
  constructor(name, attributes, parents) {
    this.name = name;
    this.attributes = attributes;
    this.parents = parents;
  }

  descend(model){
    if(model instanceof Model){
      if(this.name==model.name){
        return true;
      }else{
        for (var i = 0; i < this.parents.length; i++) {
          if(this.parents[i].descend(model)){
            return true;
          }
        }
      }
      return false;
    }else{
      throw new InvalidModelError();
    }
  }
}
