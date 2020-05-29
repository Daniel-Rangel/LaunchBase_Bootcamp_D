
const user = {
  name: 'Mariana',
  transactions:[],
  balance : 0
}

//adiciona uma nova transação, parametro passado é um objeto {type: ' credit', value: 50}
function createTransaction(transaction){
  user.transactions.push(transaction)
}

// Digitar como paramentro o tipo de transação a ser imprimida. expl: "credit ou debit"
function getHigherTransactionByType(typeTransaction){
  const max = {type: '' , value: 0}
  
  for(ty of user.transactions){
    if(typeTransaction == ty.type && ty.value > max.value){
      max.type = ty.type
      max.value = ty.value
    }  
  }
  
  return max
}

// soma de valores

function soma(objeto){
  let somar = 0
  let subit = 0
  for(typ of objeto.transactions){
    if(typ.type == "credit"){
      somar += typ.value
    }
    if(typ.type == "debit"){
      subit -= typ.value
    }
  }
  console.log(somar)
  console.log(subit)

}




// função que retorna o valor medio das transações independente do seu tipo
function getAverageTransactionValue(){
  let averageValue = 0

  for(vl of user.transactions){
    averageValue += vl.value
  }

  return console.log(averageValue / user.transactions.length)
}

//função que retorna a quantidade de trações feitas de cada tipo
function getTransactionsCount(){
  let numberOfTransaction = {credit : 0 , debit : 0}

  for(nbt of user.transactions){
    if(nbt.type == 'credit'){
      numberOfTransaction.credit ++
    }

    if(nbt.type == 'debit'){
      numberOfTransaction.debit ++
    }
  }

  return console.log(numberOfTransaction)
}


createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 120})
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})

soma(user)

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

getAverageTransactionValue()
getTransactionsCount()