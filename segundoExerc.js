
function factorialize(num) {
  var fac = num;
  if(num == 0){
    return 1;
  }
  else{
    fac *= factorialize(num-1);
  }
  return fac;
}

console.log(factorialize(5));