const range = function(start, end, step){
  let i;
  let some_array = [];
  if(step > 0){
    for(i = start; i <= end; i += step){
      some_array.push(i);
    }
  }
  return some_array;
  
}
console.log(range(0, 10, 2));