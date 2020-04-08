
//======================- ARRY 1 -===============================
/* const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];
 */

//======================- ARRY 2 -===============================
const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];


//=====================================================

/* 
for(usuario in usuarios){
  console.log(`
  ${usuarios[usuario].nome} trabalha com ${usuarios[usuario].tecnologias}
  `)
}
 */

//=====================================================

/* function checarTecnologiaUsuario (usuario){
 // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
 // SE encontrar, retorne true da função, caso contrário retorne false
 const pegarUsuario = []
 for(checarTec in usuario){
   
   for( tec in usuario[checarTec].tecnologias){

     if(usuario[checarTec].tecnologias[tec] == "CSS"){
       usuarios[checarTec].TecCss = true
     }else{
       usuarios[checarTec].TecCss = false
     }
   } 
 }
 return usuarios
}

const usua = checarTecnologiaUsuario(usuarios)

for(i in usua){
 if(usua[i].TecCss == true){
   console.log(`O usuario ${usua[i].nome } usa CSS`)
 }
}
*/

//======================- Arry 2 -===============================


function calculaSaldo(receitas, despesas) {

  let somaReceitas = somaNumeros(receitas)
  let somaDespesas = somaNumeros(despesas)

  return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
  let soma = 0

  for (numero of numeros) {
    soma = soma + numero
  }

  return soma
}



for (usuario of usuarios) {
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
  } else {
    console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
  }
}


