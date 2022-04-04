/* 
  8. Seguindof os mesmos passos do desafio anterior, crie os dias da semana em 
    formato long(domingo) e curto(dom)

    dicas:
    
      - Observe que na criação da nova data `new Date(0,0,0)` o primeiro argumento
        é a referência do ano, o segundo o mês, o terceiro o dia.

      - Observe que o objeto do segundo parametro da função `.toLocaleString()` está se referindo ao mês
        `month` e precisamos do dia da semana(weekDay)
      
      - Long ou Short
*/

const mapFn = (_,weekDayNumber) => {
  const date = new Date(0,0,weekDayNumber);

  const result = date.toLocaleString('pt-BR', {weekday: 'long'})

  return result;
}


const result = Array.from({length: 7}, mapFn);

console.log(result);