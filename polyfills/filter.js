delete Array.prototype.filter;

Array.prototype.filter = function (callbackFn) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

let arr = [18, 20, 19, 17];

const res = arr.filter((item) => {
  return item > 17;
});

console.log(res);


// oldArr [ele1,ele2,ele3];
// newArr [];