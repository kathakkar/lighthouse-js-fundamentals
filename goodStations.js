const stations = [
  ['Big Bear Donair', 10, 'school'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){
  const goodStations = [];
  for(const station of stations){
    const name = station[0];
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20 && (type === 'school' || type === 'community centre')){
      goodStations.push(name);
    }
  
  }
  return goodStations;
}

console.log(chooseStations(stations));
