let arr = [1, 2, 3, 4, 5];

delete Array.prototype.reduce;

Array.prototype.reduce = function (callback, initialValue) {
  let accumulator = initialValue; // i am not if initialValue 
//   is undefined or somevalue
// accumulator -> initial Value or Undefined
  for (let i = 0; i < this.length; i++) {
    // accumulator, currEle, index, array
    if (accumulator === undefined) {
        accumulator = this[i];
    }
    else{
        accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

let sum = arr.reduce((accumulator, currEle, index) => {
  return accumulator + currEle;
});

console.log(sum);

// // reduce without initialValue -> ????
// // accumulator will take arr[0] / 0th element of array;

// // reduce with initialValue
// // accumulator will take initialValue


// console.log(sum);


// function abc(arg1){
//     console.log(arg1);
// }

// abc();