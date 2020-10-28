# Basico de javascript

Para iniciar um comando no **TERMINAL** usamos, **node** **_nomeDaPasta_**. isso so com arquivos javascript.

## Conseitos Encinado

-   Variavel
-   imprimir mensagem usando node no terminal.


### *_Variavel_*

>Tudo aquilo que é armazenado no computador por um tempo, apos o uso ele é apagado.

Existem 3 tipos de variveis, são elas var, const, let. Aprenderemos com o tempo cada uma delas a usada é **const**

#### Descrição:

const - contante, permanece sempre com mesmo valor e tipo.

#### Modo de uso:
```
const nome = "Daniel"

console.log(nome)
```
<br>

## Comentários, String, Numbers

comentários usado para deixar algum tipo de informação, como oque deve ser feito, algo para ser modificado ou sinalizado. para isso usa-se "//comentario" ou "/* comentario */" 

### *_Tipos primitivos_*

> são definidos em 6 tipos, são eles, string, number, boolean, BigInt null, Undefined. neste estudo usaremos alguns deles, Number e string.

Para poder printar ou fazer o melhor uso da escrita no codigo quando se retorna valor, ao usar comando "node nomeArquivo", iremos fazer o uso do template string são elas representado por " **acento grave ``** "

#### Exemplo
```
const nome2 = "Lucas"
const nomes = `Olá ${nome2}`

console.log(nomes)
```

Quando se trabalha com string toda informação ira ser identificada com aspas simple, aspas duplas, e acento grave(template string). Quando não se tem essa informação ele se identificara como numero ou seu tipo primitivo.

#### Exemplo

```
const nome = "Daniel"   // string
const nome2 = 8         // number

const nomes = `Olá ${typeof nome2}`

console.log(nomes) // retonor será "Olá number" devido ao "typeof"
```

-[x] typeof revela o tipo primitivo da variavel.