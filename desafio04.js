// 4. Criar um array que inicie com 5 e termine com 8

let initial = 10;
let final = 15;

let resultLength = final - initial + 1;

const mapFn = (value, index) =>  initial + index;

const result = Array.from({ length: resultLength }, mapFn);

console.log(result)
