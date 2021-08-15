const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';
const judgeVegetable = function (vegetables, metric){
  var characteristic = 0;
  var submitter = "";
  for (let i = 0; i <= vegetables.length - 1; i++){
    if(characteristic < vegetables[i][metric]){
      characteristic = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return String(submitter);
}

console.log(judgeVegetable(vegetables, metric));