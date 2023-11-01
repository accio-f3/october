const grandParent = document.getElementById("grandParent");

const parent = document.getElementById("parent");

const child = document.getElementById("child");

// there's one more argument of addEventListener
// 1st is type of event
// 2nd is function which has to be triggered
// 3rd is true/ false
// by default 3rd arg is false

// true -> trickle down
// false -> bubbling up (default behav)

grandParent.addEventListener("click", (event) => {
    event.stopPropagation();
  console.log("grand parent clicked");
},false);

parent.addEventListener("click", () => {
  console.log("parent clicked");
},true);

child.addEventListener("click", (event) => {
  console.log("child clicked");
},false);
