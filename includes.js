if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    let idx = fromIndex | 0; // Convert to integer
    let positiveIndex = Math.max(idx >= 0 ? idx : this.length + idx, 0);

    // this works but fails incase of [NaN].indexOf(NaN);  // -1
    // return this.indexOf(searchElement, positiveIndex) !== -1;

    while (positiveIndex < len) {
      // SameValueZero comparison
      if (
        o[k] === searchElement ||
        (
          typeof o[k] === 'number' &&
          typeof searchElement === 'number' &&
          isNaN(o[k]) && isNaN(searchElement)
        )
      ) {
        return true;
      }
      positiveIndex++;
    }

    return false;
  };
}