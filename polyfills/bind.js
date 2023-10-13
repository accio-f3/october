// bind is just a syntax sugar over
// function.call
delete Function.prototype.bind;

Function.prototype.bind = function (objectContext, ...fixedArgs) {
  const oldFn = this; // this stay constant for 
  // a particular bind
  // only this function will be invoked every time
  return function (...nonFixedArgs) {
    return oldFn.call(objectContext, ...fixedArgs, ...nonFixedArgs);
    // what is the value of this key word here ???
    // this will change every time
  };
};

let obj = {
  a: 10,
  b: 20,
};

function sum(arg1, arg2) {
  console.log(this);
  return arg1 + arg2;
}

// sum.call(obj,4,5,1,2);

// // console.log(sum(1, 2));

// // bind return me a function which eventually
// // runs sum.call(obj,args) internally

// console.log(sum.call(obj));

const newSum = sum.bind(obj,4,5); // newSun function will have
// oldFn through ???

console.log(newSum(1,2)); // console.log(sum.call(obj))

// console.log(obj);

// sum.call(obj);

// newSum(args);
