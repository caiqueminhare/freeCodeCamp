
function chunkArrayInGroups(arr, size) {
  var result = [];
  for( var i = 0 ; i < arr.length/2 ; i++){
  	result.push(arr.slice(0,-size));
  	result.push(arr.slice(size));
  }
  return result;
  
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
