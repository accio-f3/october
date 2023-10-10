let arr = new Array();

// arr.__proto__ is Array.prototype;

// hidden methods and properties for all objects
Object.prototype.someXYZ = "test";

// function abc(){

// }

let obj = {};

// obj.__proto__ is Object.prototype
// obj.__proto__.__proto__ -> null
// arr.__proto__ -> Array.prototype

// anyThingThatExistInJS.__proto__ === randomThingInJS.prototype
// if the above line is true that means
// anyThingThatExistInJS is instance of randomThingInJS


