const urlEncode = function(text) {
  let newText = "";
  let text1 = text.trim();
 
  for(let i = 0; i <= (text1.length)-1; i++){  
    if(text1[i].trim() === ""){
      newText += "%20";
    }
    else{
      newText += text1[i];
    }
  }
  return newText;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));