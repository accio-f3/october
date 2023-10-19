// // How you can copy an object?


// // // let obj1 = {
// // //   a: 10,
// // // };

// // // // // shallow copy
// // // // let obj2 = obj1;

// // // // obj2.a=20;
// // // // console.log(obj1);

// // // let obj3 = {
// // //   ...obj1,
// // // };

// // // obj3.a=100;

// // // console.log(obj1);
// // // console.log(obj3);


// // let obj1 = {
// //   a: 10,
// //   b: {
// //     c: 20,
// //   },
// // };

// // // // this is for sure shallow
// // // let obj2 = obj1;

// // let obj3 = {
// //   ...obj1,
// // };

// // obj3.a=20;
// // obj3.b.c=200;

// // console.log(obj1);
// // console.log(obj3);
// // let obj1 = {
// //   a: 10,
// // };

// // localStorage.setItem("a", 10);
// // localStorage.setItem("obj1", obj1);
// // // local storage cannot save object
// // // we need to convert it into an object
// // localStorage.setItem('obj2',JSON.stringify(obj1));
// // console.log(localStorage.getItem('obj2'));

// // console.log('abc');


// let obj = {
//   a: 10,
//   b: {
//     c: 100,
//   },
// };

// // let stringObj = JSON.stringify(obj);

// // let obj2 = JSON.parse(stringObj);
// // obj2.b.c=100000;

// // console.log(obj);
// // console.log(obj2);

// let deepCopy = JSON.parse(JSON.stringify(obj));
// console.log(deepCopy);

// // how you access local storage
// // application
// // localstorage


birthPlace("delhi", (message) => {
  console.log(message);
});