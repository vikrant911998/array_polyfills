if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callbackFn, thisArg) {
    // Ensure `this` is an array
    if (!Array.isArray(this)) {
      throw new TypeError(this + " is not an array");
    }

    // Ensure callback is a function
    if (typeof callbackFn !== "function") {
      throw new TypeError(callbackFn + " is not a function");
    }

    for (let i = 0; i < this.length; i++) {
      callbackFn.call(thisArg, this[i], i, this);
    }
  }
}