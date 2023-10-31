// debouncing -> it limits the execution
// of a function call
// and it waits for a certain amount of time
// before running that function

function searchFn(event){
    console.log(event.target.value);
}

// debounceFn takes a normalFn and gives me
// debounced version of normalFn

const debounceFn = (normalFn, delay) => {
    let timerId;
    return function(...args){
        // internally i have to 
        // call normalFn(...args);

        // we need to check 
        // if there's already any API
        // call
        // if(timerId){
        //     clearTimeout(timerId);
        // }
        timerId = setTimeout(()=>{
            normalFn(...args);
        },delay);
    }
};

const optimisedFn = debounceFn(searchFn,150);


// const timerId2 = setTimeout(()=>{
//     console.log('test');
// },500);

// const timerId3 = setTimeout(()=>{
//     console.log('test 2');
// },600);

// const timerId4 = setTimeout(()=>{
//     console.log('test 3');
// },600);

// console.log("id---->", timerId2);

// console.log(timerId3);
