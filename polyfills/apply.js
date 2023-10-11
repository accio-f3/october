delete Function.prototype.apply;

Function.prototype.apply = function (ObjContext, arrayOfArgs) {
  // I have fn defi in this keyword
  ObjContext.tempFn = this;
  const res = ObjContext.tempFn(...arrayOfArgs);
  delete ObjContext.tempFn;
  return res;
};

let obj = {
  a: 10,
  b: 20,
};

let args = [1, 2];

function sum(arg1, arg2) {
  console.log(this);
  return arg1 + arg2;
}

console.log(sum(...args));

console.log(sum.apply(obj, args));
console.log(obj);
