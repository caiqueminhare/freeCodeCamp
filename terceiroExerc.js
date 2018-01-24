var re = /[^a-zA-Z\d\w:\u00C0-\u00FF]|[_]/g;

function palindrome(str) {
  str = str.replace(re,'').toLowerCase();	
  var strLimpa = str.replace(re, '').toLowerCase();

  strLimpa = strLimpa.split("");
  str = str.split("");

  if(strLimpa.reverse().join("") == str.join("")){
  	console.log(strLimpa.reverse().join(""));
  	console.log(str.reverse().join(""));
  	return true;
  }
  console.log(strLimpa.reverse().join(""));
  	console.log(str.join(""));
  return false;
}


palindrome("_eye");
palindrome("2A3*3a2");
palindrome("2A3  3a2");