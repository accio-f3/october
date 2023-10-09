// function f1(){
//     console.log('sdfgh');
//     console.log(this);
// }

// let obj={
//     a:'this is obj',
// }

// const f2 = f1.bind(obj);

// // console.log(f2);

// f1();

// f2();


// console.log(obj);

let obj={
    a:'70',
}

function f1(p1,p2,p3){
    console.log(this);
    console.log(p1,p2,p3);
}

// f1(1,2,3);
// console.log('///////');
// f1(8,9,10);

// // f2 is carbon copy of f1
// // with args no arguments fixed
// const f2 = f1.bind(obj);
// console.log('///////');
// f2(10,40,30);

// console.log('///////');
// const f3 = f1.bind(obj, "accio");
// f3("this is f3", "next is f4", "f5");


// const f4 = f1.bind(obj,'blr','delhi');
// f4('1','2','3');

const f5 = f1.bind(obj,'098','911','100');
// f5();

let obj2={
    p:'testing',
}

const f6 = f5.bind(obj2);
f6();

