function callBack (fn, ...rest){
    fn(...rest);
}

function log(...args){
    console.log(args);
}

callBack(log,1,2,3,4);