// what is fetch

const url = "https://dummyjson.com/products";

// fetch is a method that gives me a
//  promise given to me by javascript when invoked with a URL
// that assures me that it will get me the data

// fetch(url); is same as P1

// fetch(URL) is a internal method
// which returns a promise

fetch(url) // fetch(URL) is a promise just like p1
  .then((responseObj) => {
    // data is a response object
    // how can we convert to UI it
    // into browser readable that is basically
    // JSON
    const dataPromise = responseObj.json();
    console.log(dataPromise);
    return dataPromise;
    // return data.json();
  })
  .then((result) => { // result is JSON
    console.log(result.products[0].title);
  })
  .catch((err) => {
    console.log(err);
  });

//   any URL returns me RESPONCE obj
//   json is internal method od responce object
//  we have to conver this RESPONCE obj to JSON

// json method is giving me a promise
