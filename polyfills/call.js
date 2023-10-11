delete Function.prototype.call;

Function.prototype.call = function (objectContext, ...restOfTheArgs) {
  // the THIS keyword will be having defi of fn
  objectContext.tempFn = this;
  const res = objectContext.tempFn(...restOfTheArgs);
  delete objectContext.tempFn;
  return res;
};

let obj = {
  a: 10,
  b: 20,
};

function sum(arg1, arg2) {
  console.log(this);
  return arg1 + arg2;
}

console.log(sum.call(obj, 1, 2));

console.log(obj);

// function abc(){
//     console.log('something');
// }
// Function.prototype.test = function(){
//     console.log(this);
// }

// abc.test();
