
function titleCase(str) {
  var vetorDePalavras = str.split(" ");
  for( i = 0 ; i < vetorDePalavras.length ; i++){
  	if(vetorDePalavras[i].charAt(0) != vetorDePalavras[i].charAt(0).toUpperCase()){
  		vetorDePalavras[i][0] = vetorDePalavras[i][0].toUpperCase();
  	}
  }
  console.log(vetorDePalavras);
}

console.log(titleCase("I'm a little tea pot"));