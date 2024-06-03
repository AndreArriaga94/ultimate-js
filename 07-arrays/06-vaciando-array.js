let arr = [1,2];
// arr = [];

let arr2 = arr;
arr = [];
console.log(arr2);

arr.length = 0;

let arr = [1,2];
arr.splice(0, arr.length);

// mas lenta y que utiliza mas recursos
while (arr.length>0){
    arr.pop();
}