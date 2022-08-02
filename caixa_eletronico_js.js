const prompt = require("prompt-sync")();

console.log("Teste de caixa eletronico simples. Digite seus dados de acesso!")

let balance = 1000

let withdraw = 5

let account_data = 0

const cpf = prompt("Digite seu cpf: ")
const password = prompt("Digite sua senha: ")

if (cpf == 102055 && password == 102055){
    console.logn("Olá, seja muito bem vindo ao nosso caixa eletronico!")
    console.log('(1) Extrato\n(2) Sacar\n(3) Depositar\n(4) Fechar')
    let account_data = prompt('Digite o que você deseja realizar: ')


if (account_data == 1){
    let account_number = getRandomIntInclusive(1000, 9999)
    console.log("Número da conta:", account_number)
    console.log("Seu saldo em reais: R$", balance)
    console.log("Saques disponíveis:", withdraw)
}

if (account_data == 2){
    let withdraw_ok = prompt("Digite o valor que você deseja sacar: ")
    if (withdraw_ok <= balance){
    
        balance = balance - withdraw_ok
        console.log(`Você sacou o valor de R$${withdraw_ok}`)
        console.log(`Agora você tem um valor total de R$:${balance} disponível em sua conta.`)
        withdraw = withdraw -1
        console.log(`Agora você pode realizar mais ${withdraw} saques até o final do mês!`)

} else if (withdraw_ok >= balance){
    console.error('Você não tem esse valor disponível na conta!')
    }

} else if (account_data == 3){
    let deposit = prompt("Digite o valor que deseja depositar: ")
    balance = Number(deposit) + balance
    console.log(`Você depositou R$${deposit} na sua conta com sucesso e ficou com R$${balance} disponível na conta!`)
}

if (account_data == 4){
    console.error("Ok, aplicativo encerrado!")
}
    //Função retirada da documentação do JavaScript no site do mozilla.org
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}
