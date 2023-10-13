function getArrayDepth(value) {
  return Array.isArray(value)
    ? 1 + Math.max(0, ...value.map(getArrayDepth))
    : 0;
}

let array = [1, [3, 4], 12];
// number -> 0
// for normal array -> 1
const ans = array.map(getArrayDepth);

console.log(ans);

console.log(array);

console.log(getArrayDepth(array));

console.log(array);
