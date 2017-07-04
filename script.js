let list = document.getElementsByTagName("ul");
let firstW = "";
let fullArr = [];
let finalW = "";
let chunk = "";
let final = "";

function paster(firstW, chunk, finalW){
  final = firstW  + chunk + " " + finalW + "?";
}

function selectLast(arr){
  const patt = /[a]/i
  const size = arr.length - 1
  return ending = arr[size];
}

function sentencer(element, index, array) {
  let size = array.length - 1;
  if(index === 0){
    firstW = element[index][0];
  }
  if(index === size){
    finalW = selectLast(element[0]);
  } else {
    // finalIndex = element.length - 1;
    let temp = element[0].slice(1,5).join(" ");
    chunk += " " + temp;
  }
}

function butcher(sentences){
  sentences.forEach(splitter);
}

function picker(fullArr, cuts){
  const workArr = [];
  for (cuts; cuts > 0; cuts--) {
    workArr.push(fullArr[cuts].title);
  }
  console.log('workArr', workArr);
  return workArr;
}

function splitter(sentence, index, array) {
  let words = []
  words.push(sentence.split(" "));
  fullArr.push(words);
}

fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow', {
  method: 'get'
}).then(function(response) {
  return response.json();
}).then(function(data){
  let arrRes = data.items;
  let workArr = picker(arrRes, 3);
  butcher(workArr);
  // console.log('fullArr', fullArr);
  fullArr.forEach(sentencer);
  paster(firstW, chunk, finalW);
  console.log('>>>>>', final);
}).catch(function(err) {
  // Error :(
});