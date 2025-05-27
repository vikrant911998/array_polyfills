if (!Array.prototype.map) {
  Array.prototype.map = function (callbackFn, thisArg) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    
    // Ensure `this` is an array
    if (!Array.isArray(this)) {
      throw new TypeError(this + " is not an array");
    }
    
    // Ensure callback is a function
    if (typeof callbackFn !== "function") {
      throw new TypeError(callbackFn + " is not a function");
    }
  
    var result = [];
  
    for (let i = 0; i < this.length; i++) {
      result.push(
        callbackFn.call(thisArg, this[i], i, this)
      );
    }
    return result;
  }
}