const sumLargestNumbers = function(data) {
  let max1 = null;
  let max2 = null;

  //Finding First maximum number
  for(let i = 0; i <= data.length - 1; i++){
    for(let j = 0; j <= data.length - 1; j++){
    
       if(data[i] <= data[j] && max1 == null){
        max1 = data[j];
       }
       if(max1 != null && max1 < data[j]){
        max1 = data[j];
       }    
    }
  }

  //Finding Second maximum number
  for(let k = 0; k <= data.length - 1; k++){
    for (let l = 0; l<=data.length - 1; l++){
      
       if(data[k] <= data[l] && max2 == null && data[l] !== max1){
         max2 = col;
         
       }
       if(max2 != null && max2 < data[l] && data[l] != max1){
           max2 = data[l];
       }  
    }
   
  }
  //Sum of max1 and max2
  return max1 + max2;

}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));