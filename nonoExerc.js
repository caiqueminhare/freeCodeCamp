
function slasher(arr, howMany) {
  while(howMany > 0){
    arr.shift();
    howMany--;
  }
  return arr;
}

console.log(slasher([1, 2, 3], 2));