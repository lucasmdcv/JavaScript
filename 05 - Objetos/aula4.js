const pessoa = {
    nome: 'Lucas Mendes',
    idade: 23,
    //método this 
    //Podemos adicionar e remover nomes
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

const atributo = 'nome'; // <-- string que bate com o atributo da chave pessoa

//console.log(pessoa[atributo])  <-- imprime a string que está ligada a chave
console.log(pessoa[atributo])