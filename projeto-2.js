const prompt = require("prompt-sync")();
console.clear();
// Primeiramente, começams declarando nossas varivaeis que são, um array pro computador decidir entre 3 opções, a quantidade de rodadas
// as escolhas e vitorias do usuário e do PC, e se ele deseja jogar novamente.
let jogo = ["pedra", "papel", "tesoura"];
let rodadas;
let escolhaPC;
let escolha;
let vitoria;
let vitoriaPC ;
let jogarNovamente;

console.log(`
Olá, vamos jogar um jogo de JoKenPô!
As regras são as seguintes!
 _________________________________________
|                                        |
|      PEDRA   ------>    TESOURA        | 
|                                        | 
|      PAPEL   ------>    PEDRA          |              
|                                        |
|      TESOURA ------>    PAPEL          | 
|________________________________________|

obs: Se lê ganhador  ------> perdedor
`);

// Aqui no caso estou usando, do...while para que ele pelo menos leia 1 entrada de dados antes de terminar.
do {
  rodadas = +prompt("Quantas rodadas você deseja jogar: ");
//while para que o usuário entre com um númeor maior que zero.
  while (isNaN(rodadas) || rodadas <= 0){
    console.log('Entrada inválida, digite novamente!');
    rodadas = +prompt();
  }
// Declarei os valores com valor igual a zero, para no caso de quando repetir o jogo, não ocorrer de continuar somando os pontos do jogo anterior.
  vitoria = 0
  vitoriaPC = 0
  empate = 0
// Aqui inicia uma laço de reptição FOR, que vai de zero até o valor que foi declarado pelo usuário, para decidir a quantidade de rodadas.
  for (let i = 0; i < rodadas; i++) {
//console.log para mostrar as rodadas e as escolhas do jogador.      
    console.log(`${i + 1}ª RODADA.`);  
    console.log("Escolha entre pedra, papel e tesoura: ");
    escolha = prompt().toLowerCase();
// Verificação de while, para fazer com que o usuário escreva da forma correta as entradas das strings.
    while (escolha != "pedra" && escolha != "papel" && escolha != "tesoura") {
      console.log("Escolha não identificada. Escolha pedra, papel ou tesoura");
      escolha = prompt().toLowerCase();
    }
// Geração "randomica" das strings pelo computador
    escolhaPC = jogo[Math.floor(Math.random() * 3 )];
    console.log(`
    Você escolheu: ${escolha}
    `);
    console.log(`
    O computador escolheu: ${escolhaPC}
    `);
// E comparação do IF colocando as opções de vitórias com o devido contador, ELSE IF para derrotas e ELSE para no caso de empate.
    if (
      (escolha == "pedra" && escolhaPC == "tesoura") ||
      (escolha == "papel" && escolhaPC == "pedra") ||
      (escolha == "tesoura" && escolhaPC == "papel")
    ) {
      vitoria++;
      console.log(`VOCÊ GANHOU ${vitoria} RODADA(S)`);
    } else if (
      (escolha == "pedra" && escolhaPC == "papel") ||
      (escolha == "papel" && escolhaPC == "tesoura") ||
      (escolha == "tesoura" && escolhaPC == "pedra")
    ) {
      vitoriaPC++;
      console.log(`O COMPUTADOR GANHOU ${vitoriaPC} RODADA(S)`);
    } 
    //Placar para facilitar a visualização do fim de cada rodada.
    console.log(`PLACAR:
    ______________________
   |JOGADOR :   ${vitoria}  
   |COMPUTADOR: ${vitoriaPC}
   |______________________
    `)
  }
//Nessa etapa colocamos as condições de vitória do usuário, do computador e o caso de empate também caso nenhum dos dois ganhem.  
  if (vitoria > vitoriaPC) {
    console.log(
      `Parabéns! Você foi o grande campeão com um total de ${vitoria} vitória(s).`
    );
  } else if (vitoria < vitoriaPC) {
    console.log(`Que pena! O computador ganhou com um total de ${vitoriaPC} vitória(s).
    `);
  } else {
    console.log(`
    Essa partida terminou empatada. 
    `);
  }
//E por fim, a validação se o jogador deseja ou não jogar novamente.  
  jogarNovamente = prompt(`Você gostaria de jogar novamente? sim ou nao?   `).toLowerCase();
  console.log();
} while (jogarNovamente == "sim");