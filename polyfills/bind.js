delete Function.prototype.bind;

Function.prototype.bind = function (objContext, ...fixedArgs) {
    const oldFn = this;
    const newFn = function(...nonFixedArgs){
        return oldFn.call(objContext, ...fixedArgs, ...nonFixedArgs);
    }
    return newFn;
};

let obj = {
  a: 10,
  b: 20,
};

function sum(a, b) {
  console.log(this);
  return a + b;
}
// no args are fixed
const sum2 = sum.bind(obj);
// bind is syntactical sugar over sum.call

sum2(10,20); // sum.call(obj,10,20);

console.log(obj);


// function old(...args){
//     console.log(args);
//     return 'hello';
// }

// function newFn(...args){
//     return old(...args);
// }

// console.log(newFn(1,2,3));
