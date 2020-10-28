const empresa = {
    nome: 'Roketseat',
    cor: 'Roxo',
    Endereco: {
      Rua: 'Rua guilherme gembala',
      numero: 260
    }
  }

  console.log(`
    A Empresa ${empresa.nome} está localizado em ${empresa.Endereco.Rua}, ${empresa.Endereco.numero}
  `)

  const programador = {
    nome: 'Carlos',
    idade: '32',
    tecnologia: [
      { nome: 'C++',
        especialidade: 'Desktop'
      },
      { nome: 'Python', 
        especialidade: 'Data Science' 
      },
      { nome: 'JavaScript', 
        especialidade: 'Web/Mobile' 
      }
    ]
  }

  console.log(`
    O usuario ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologia[0].nome} com especialidade ${programador.tecnologia[0].especialidade}
  `)