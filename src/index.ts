const saudacao = (nome: string): string => {
    return `Olá, ${nome}! Aprendendo TypeScript!`;
  };

const somaFunction = (numero1: number, numero2: number): number => {
    let total = numero1 + numero2;
    return total;
  };

const funcaoArrayString = (): string[] => {
  let array: string[] = [
    'Joao',
    'Maria',
    'Guilherme'
  ]
  return array
}

const funcaoArrayArrayDiverso = (): any[] => {
  let array2: any[] = []
  return array2
}

interface Person {
  nome: string,
  idade: number,
  isStudent: boolean,
}

const people = (person: Person) => {
  return `A pessoa cadastrada tem o nome ${person.nome} e a idade ${person.idade}`
}

var pessoaCadastrada = {
  nome: 'Fabio',
  idade: 34,
  isStudent: false
}

console.log(people(pessoaCadastrada));


  
  

  