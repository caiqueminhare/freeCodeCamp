
function getIndexToIns(arr, num) {
  arr = arr.sort(function(a,b){
  	return a - b;
  });

  for( var i = 0 ; i < arr.length ; i++){
    if(arr[i] >= num){
      console.log(arr);
      return i;
    }
  }
  return i;
  // Find my place in this sorted array.
}

console.log(getIndexToIns([2,5,10], 15));