// // what is promise?
// // a promise basically represents upcoming completion or
// // a failure of an async event/ task (a task that will happen in future)
// // and it's resulting value.

// // if you are able to go to birthday party
// // then you get to watch movie with your friends
// // else person will not talk to you for a month

// const p1 = new Promise((resolve, reject) => {
//   // this is hypothetical condition
//   // console.log('this is a statement outside my resolve and reject');
//   const condition = true;
//   if (condition) {
//     // setTimeout(() => {
//     resolve("this promise is now resolved");
//     // }, 0);
//   } else {
//     // setTimeout(() => {
//     reject("this promise failed");
//     // }, 0);
//   }
// });

// ///
// console.log("start");

// p1.then((data) => {
//   // it won't take 10 seconds
//   // why ?? because my for loop took 1 sec
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// console.log("end");

// setTimeout(()=>{
//     console.log('this is setTimout');
// },0)

// // this for loop is not running in the promise
// // a for loop that is running for 10^8
// // not writing this in actual
// // because this will crash my browser

// // p1.then((data) => {
// //   console.log(data);
// // }).catch((err) => {
// //   console.log(err);
// // });

// // a promise has been declared
// // a 10^8 for loop
// // executing the promise

// // why we are getting this uncaught error is because
// // we are not catching the error.

// // ////
// // to execute a promise you have to call 'then' method
// // of a promise object
// ////

// // what ever data resolve method is having
// // will be passed to callback inside then method

// // ////
// // why we got this error?
// // Uncaught (in promise) this promise failed
// // //// ///

// // //// ///
// // what is p1? it's instance of Promise Class
// // it's an object that
// // have state of the promise
// // promise can be 'fulfilled' or 'rejected' or 'pending'
// // so my p1 is basically a promise object that has state
// // and resulting value
// // //// ///

// // // // // // // // // // // // // //
// //  Promise in js is class which takes a callback fn
// // and the callback function gives me 2 functions
// // resolve and reject
// // // // // // // // // // // // // //

// // //////////
// // if you think promise is fulfilled
// // pass the data to resolve function
// // else pass the err to reject
// // //////////

function promise1(){
  return new Promise((res, rej) => {
    const condi1 = true;
    if (condi1) {
      res("p1");
    } else {
      rej("e1");
    }
  });
}

const p2 = new Promise((res, rej) => {
  const condi2 = true;
  if (condi2) {
    res("p2");
  } else {
    rej("e2");
  }
});

p2.then((data) => {
  console.log(data);
  console.log(promise1());
  return promise1();
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
