function intro(name) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi I am ${name}`);
      }, 1000);
    } else {
      reject("sorry no intro");
    }
  });
}

function workPlace(companyName) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi I work at ${companyName}`);
      }, 500);
    } else {
      reject("sorry no work place");
    }
  });
}

function city(cityName) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi I live in ${cityName}`);
      }, 300);
    } else {
      reject("sorry no city to live");
    }
  });
}

// intro("rockey")
//   .then((data) => {
//     console.log(data);
//     workPlace("accio")
//       .then((data) => {
//         console.log(data);
//         city("delhi")
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

intro("rockey")
  .then((data) => {
    console.log(data);
    return workPlace("accio");
  })
  .then((data) => {
    console.log(data);
    return city("delhi");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   let's do these types of question in misc classes
