const deepClone = (obj) => {
  const type = typeof obj;
  //   this if condition should Allow only objects
  //  to go through
  // 1st step is condition
  if (type !== "object" || !obj) return obj;

  //   2nd step is converting my Object into an Array
  let arrObj = Object.entries(obj);
  // 3rd step is converting array into deepCloneArray
  let deepCloneArrObj = arrObj.map(([key, value]) => [key, deepClone(value)]);

  // 4th step converting deepCloneArrObj back to object
  return Object.fromEntries(deepCloneArrObj);
};

// const object1 = {
//   a: "10",
//   b: "20",
// };

// console.log(Object.entries(object1));


const obj = {
  a: 10,
  b: {
    c: 20,
  },
};

const arrObj = Object.entries(obj);

console.log(arrObj);

console.log(Object.fromEntries(arrObj));