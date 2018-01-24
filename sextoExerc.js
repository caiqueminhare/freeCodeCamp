
function repeatStringNumTimes(str, num) {
  var string = "";
  while(num>0){
   string += str;
    num--;
  }
  return string;
}

console.log(repeatStringNumTimes("abc", 3));