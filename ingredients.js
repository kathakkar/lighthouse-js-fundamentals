const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("FOR LOOP PRINTING INGREDIENTS");
for(i=0;i<=ingredients.length-1;i++){
  console.log(ingredients[i]);
}

console.log("WHILE LOOP PRINTING INGREDIENTS");
let j=0;
while(j<=ingredients.length-1){
  console.log(ingredients[j]);
  j++;
}

console.log("FOR LOOP REVERSE PRINTING INGREDIENTS");
for(k=ingredients.length-1;k>=0;k--){
  console.log(ingredients[k]);
}