const instructorWithLongestName = function(instructors) {
  
  let maxLength = null;

  for(let i = 0; i <= instructors.length-1 ; i++){
    for(let j = 0; j <= instructors.length-1 ; j++){

      let len1=instructors[i].name.length;
      let len2=instructors[j].name.length;

      if(len1 <= len2 && maxLength == null){
        maxLength = len2;
        instructor = instructors[j];
      }
      if(maxLength != null && maxLength < len2){
        maxLength = len2;
        instructor = instructors[j];
      }    
    }
  }
  return instructor;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
