// when you declare a promise
// the code inside the promise starts executing
// .then is used to access the value of resolve
// .catch is used to access the value of reject


// if resolve and reject are not executed due to async nature
// of code inside promise then it will have pending state


// resolve and reject are async in nature
// if set timeout is not passed in resolve and reject
// just consider it as 0