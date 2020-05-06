function UndefinedLabelError(message) {
  this.name = "UndefinedLabelError";
  this.message = (message || "");
}

UndefinedLabelError.prototype = new Error();
UndefinedLabelError.prototype.constructor = UndefinedLabelError;

function InvalidModelError(message) {
  this.name = "InvalidModelError";
  this.message = (message || "");
}

InvalidModelError.prototype = new Error();
InvalidModelError.prototype.constructor = InvalidModelError;

function InvalidDatetimeError(message) {
  this.name = "InvalidDatetimeError";
  this.message = (message || "");
}

InvalidDatetimeError.prototype = new Error();
InvalidDatetimeError.prototype.constructor = InvalidDatetimeError;

function InvalidUserError(message) {
  this.name = "InvalidUserError";
  this.message = (message || "");
}

InvalidUserError.prototype = new Error();
InvalidUserError.prototype.constructor = InvalidUserError;

function InvalidDatumError(message) {
  this.name = "InvalidDatumError";
  this.message = (message || "");
}

InvalidDatumError.prototype = new Error();
InvalidDatumError.prototype.constructor = InvalidDatumError;

function ModelMismatchError(message) {
  this.name = "ModelMismatchError";
  this.message = (message || "");
}

ModelMismatchError.prototype = new Error();
ModelMismatchError.prototype.constructor = ModelMismatchError;

module.exports = {
  InvalidUserError,
  InvalidLabelError,
  InvalidModelError,
  InvalidDatetimeError,
  ModelMismatchError
}
