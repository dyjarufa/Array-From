// 3. Criar um array [1,2,3,4,5,6]:
//- Array Like, pode ser um objeto

const result1 = Array.from('123456'); 
console.log(result1);

//array like 
const result2 = Array.from({ length: 6  }); 
console.log(result2.length); 

['a', 'b', 'c'].map(function(value, index) {
  console.log(index , value); 
})

//////////////////////////////////////////////

const result3 = Array.from({ length: 6 }, function(value, index){
  //console.log(value , index)
  return index + 1;
})

console.log(result3)

//refactor
const result4 = Array.from({  length: 6 }, (_, index) => index + 1)
console.log(result4)


////////////////////////////////////////////////////////////////

const mapFn = function(value, index) {
  return index + 1;
}

const result5 = Array.from({ length: 6 }, mapFn); // recebendo a função map como argumento

console.log(result5)