'use strict'

numbers.filter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result[result.length] = this[i];
    }
  }

  return result;
};
