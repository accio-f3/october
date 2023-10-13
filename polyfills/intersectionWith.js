var _ = require('lodash');
var numbers = [1.7, 2.4, 3.6, 4.2];
var listOfNumbers = '';

listOfNumbers = _.intersectionWith([{ 'x': 4 }, { 'x': 1 }], [{ 'x': 4 }], _.isEqual);

// intersectionWith return array of common elements

_.intersectionWith(array1, array2, array3, comparisonMethod);

console.log(listOfNumbers);

// [{ 'x': 4 }, { 'x': 1 }]
// 