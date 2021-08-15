const checkAir = function (samples, threshold) {
  let dirty = 0;
  for (let i = 0; i <= samples.length - 1; i++){
    if(samples[i] === 'dirty'){
      dirty ++;
    }
  }
  let percentOfPollution = dirty / samples.length;
  if(percentOfPollution > threshold){
    return "Polluted";
  }
  else{
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));