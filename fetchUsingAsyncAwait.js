const url =
  "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-09-16&checkout=2024-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "65e22afc84msh1fa2987821b194dp1fc6a6jsn17d4b8079803",
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  },
};

// global 
async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.results);
    renderData(result.results);
  } catch (error) {
    console.error(error);
  }
}
{/* <div id="hotel-list"></div>; */}

function renderData(arrayOfHotel) {
  //  hotelListDiv
  arrayOfHotel.forEach((hotel) => {
    const hotelDiv = document.createElement("div");
    const title = document.createElement("h1");
    title.innerHTML = hotel.name;
    title.appendChild(hotelDiv);
    
  });
}

getData();


// try{
//     // trying something , if it fails catch it in the catch block
// }