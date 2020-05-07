export class ModelMismatchError extends Error {
  constructor(message = "") {
    super(message);
    this.name = "ModelMismatchError";
  }
}

export class QuantityMismatchError extends Error {
  constructor(message = "") {
    super(message);
    this.name = "QuantityMismatchError";
  }
}
