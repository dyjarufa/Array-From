/* 
  6. Crie um array que tenha em suas posições de A - Z

  Dicas:
    - Cada caracter de um `String` corresponde a um numero. Use `String.charCodeAt(0)` 
      (sendo 0 a posição inicial de cadeia de String) para pegar o número de referência da String desejada.

    - É possível transformar um número em uma String. Utilize `String.fromCharCode(<x>)` sendo x o número de
      referência do caractere

    - Utilize a função anterior para criar um intervalo numérico correspondente de A - Z
*/

//Transformar para número
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));

// Transformar para letra
console.log(String.fromCharCode(65))
console.log(String.fromCharCode(90))


/////////////////////////////

const range = (start, stop) => {
  stop = stop === undefined ? start : stop;
  start = stop === start ? 1 : start;
  let length = stop - start + 1;

  const mapfn = (value, index) => start + index;

  const result = Array.from({  length  }, mapfn);

  return result;
}


const result = range(65, 90);
console.log(result);

console.log(result.map(val => String.fromCharCode(val)))