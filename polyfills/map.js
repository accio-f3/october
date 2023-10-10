// // Array.prototype.test = function () {
// //   console.log("sdfghj");
//   return this;
// // };
// I deleted the OG map method created by JS engine
delete Array.prototype.map;

// here we created our sasta map method
Array.prototype.map = function (callBackFn) {
  const result = [];
//   this[i]
  for (let index = 0; index < this.length; index++) {
    result.push(callBackFn(this[index], index));
  }
  return result;
};

let arr2 = [1, 2, 3];

const res = arr2.map((item, i) => {
  return item * 2;
});

let arr1 = [567,567,3];

const res2 = arr1.map((item) => item);
console.log(res2);

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


