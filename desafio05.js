/*  
 5. Transforme o desafio anterior em uma função que irá receber 1 ou 2 argumentos
  
    - Afunc sempre irá retornar um array
    - Quando receber 1 argumento a função irá retornar 1 até o número recebido
    - Quando receber 2 argumentos a função irá retornar do primeiro até o segundo argumento
*/


const range = (start, stop) => {
  stop = stop === undefined ? start : stop;
  start = stop === start ? 1 : start;
  let length = stop - start + 1;

  const mapfn = (value, index) => start + index;

  const result = Array.from({  length  }, mapfn);

  return result;
}

console.log(range(4));
console.log(range(10,20));