/*
nfibonacci(7) devrait renvoyer 13, puisque 13 
est le chiffre qui se trouve en position 7 de la séquence

should return 13, since 13 is the digit that is in 
position 7 of the sequence.
Sequence: 0,1,1,2,3,4,8,13,21,34................
*/

function nfibonacci(n){
  if(n === 0) return 0;
  if(n === 1) return 1;
  if(n < 0 ) return "error" // ajout par Richardson

  return nfibonacci(n - 1) + nfibonacci(n - 2);
}

console.log(nfibonacci(7));
console.log(nfibonacci(-7));





