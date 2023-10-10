// // Array.prototype.test = function () {
// //   console.log("sdfghj");
//   return this;
// // };
// I deleted the OG map method created by JS engine
delete Array.prototype.map;

// here we created our sasta map method
Array.prototype.map = function (callBackFn) {
  const result = [];
  // this is same as arr
  for (let i = 0; i < this.length; i++) {
    result.push(callBackFn(this[i], i, this));
  }

  return result;
};

let arr = [1, 2, 3];

const res = arr.map((item) => {
  console.log(item);
  return 5;
});

console.log(res);

// map takes a callback function
// and returns me logic for updated array

// anyThing.fn();
// if fn is a normal fn then this key word
// refers to anyThing;


// filter
// reduce
// call, bind & apply
// array flat

