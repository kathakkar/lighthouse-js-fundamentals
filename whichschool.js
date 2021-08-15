const whichSchool = function(age){
  if(age >= 1 && age < 13){
    return "Elementary School";
  }
  else if(age >= 13 && age <= 18){
    return "Secondary School";
  }
  else if(age > 18 && age <= 100) {
    return "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));

