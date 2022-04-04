// 2. Criar um array com 70 posições:
//- Array Like, pode ser um objeto

//const result = Array.from({ length: 70  });

const result = Array.from({ '0': 1, length: 70  }); // mapeado

console.log(result); //retorna undefined pois não tem nada mapeado

console.log(result.length);