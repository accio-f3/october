function test1(param1,param2,param3){
    console.log(this);
    console.log(param1,param2,param3);
}

let obj={
    a:10,
}

let args=[1,2,99];
// test1(args[0],args[1],args[2]);
// test1(...args);

// test1.call(obj,args);
console.log('line 16');
test1.call(obj,...args);


console.log('line 20');
test1.apply(obj,[1,2,3,5]);


