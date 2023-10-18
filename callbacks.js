// // sync
// console.log('start');
// console.log('mid');
// console.log('end');

// // async
// console.log("start");
// setTimeout(() => {
//   console.log("mid");
// }, 500);
// console.log("end");

// console.log('start');

// function intro(name) {
//     // async
//   setTimeout(() => {
//     return `Hi I am ${name}`;
//   }, 1000);
// //   sync
// //   return undefined;
// }
// const introMessage = intro('subham');

// console.log('end');

// callback hack
// console.log("start");

function intro(name, cb) {
  setTimeout(() => {
    // here we are calling
    cb(`Hi I am ${name}`);
  }, 1000);
  //   return undefined;
}

// this is just defi of callback
intro("subham", (message) => {
  console.log(message);
  //   I will call my study info after name is printed
  whereDoIStudy("accio", (message) => {
    console.log(message);
    birthPlace("firozabad", (message) => {
      console.log(message);
    });
  });
});

// cart
// order successful
// proceed to pay


function whereDoIStudy(edTechName, cb) {
  setTimeout(() => {
    // here we are calling
    cb(`Hi I study at ${edTechName}`);
  }, 500);
  //   return undefined;
}

function birthPlace(city, cb) {
  setTimeout(() => {
    // here we are calling
    cb(`My birth place ${city}`);
  }, 300);
  //   return undefined;
}

// whereDoIStudy('accio',(message)=>{
//     console.log(message);
// })

console.log("end");

// promises
// async await

// intro -> 1000 ms
// study -> 500 ms
// birthPlace -> 300 ms