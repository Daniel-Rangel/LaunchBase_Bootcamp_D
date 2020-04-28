// Crie um programa para clacular IMC 
// e nivel de obesidade de uma pessoa

/* const nome = "calos"
const peso = 120
const altura = 1.88

const imc = peso / (altura * 2)

if(imc >= 30){
console.log(`${nome} Você está acima do peso! IMC é ${imc}`)
}else{
  console.log(`${nome} Você não está acima do peso, seu IMC é de ${imc}`)
} */

//=========================================================

// Calculo de aposentadoria

const nome = "Silvana"
const sexo = "f"
const idade = 48
const contribuicao = 23


if((idade + contribuicao) >= 85 && sexo == 'f'){
  console.log(`${nome}, você pode se aposentar!`)
}else if((idade + contribuicao) >= 95 && sexo == 'm'){
  console.log(`${nome}, você pode se aposentar!`)
}else{
  console.log(`${nome}, você não pode se aposentar!`)
}