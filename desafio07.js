/* 
  7. Criar um array de meses do ano, onde cada posição do array
    irá corresponder ao nome do mês

    ex: Janeiro, para o mês 0  e Dezembro parao mês 11

    dicas: Janeiro
      - Utilize o ` new Date(0,0)` para criar o mês de Janeiro (modifique o segundo argrumento para 11 e você
        criará o mês de Dezembro) 

      - Utilize o método `Date.toLocaleString()` para formatar os meses em português
        Esse método recebe 2 argumentos, sendo o primeiro, uma string contendo o local da formatação
        `pt-BR` e o segundo um objeto que tenha a chave `month` com o valor `'long'`
*/

const janeiro = console.log(new Date(2020,0))
const dezembro = console.log(new Date(0, 11))

const result = Array.from({ length: 12 }, (_, month) => new Date(0, month).toLocaleString('pt-BR', {month: 'long' }))

console.log(result)


// Refactor

const mapFn = (_, numberOfMonth) => {
  const date = new Date(0, numberOfMonth);

  return date.toLocaleString('pt-BR', {month: 'long'})
}

const result2 = Array.from({  length: numberOfMonth = 12 }, mapFn);

console.log(result2)