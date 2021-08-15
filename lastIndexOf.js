const lastIndexOf = function (some_array, valuetosearch){
  let indexOfvalue = -1;
  for(let i = 0; i <= some_array.length - 1; i ++){
    if(valuetosearch === some_array[i]){
      indexOfvalue = i;
    }
  }  
  return indexOfvalue;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
