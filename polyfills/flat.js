let arr = [1, 2, [3, 4, 5], [6, 7, [8, 9]]];

// depth is 2

// console.log(arr.flat());
// default value of depth is 1

function myFlat(array, depth = 1) {
    const result = [];
    array.forEach((element)=>{
        // depth is depth of array, got nothing to do with
        // element
        if (Array.isArray(element) && depth > 0) {
          // [3, 4, 5] -> [3,4,5]
          // [6, 7, [8, 9]] -> [6,7,8,9]
          const miniAns = myFlat(element, depth - 1);
          result.push(...miniAns);
        } else {
          result.push(element);
        }
    })
    return result;
}

console.log(myFlat(arr));
