const pessoa = {
    nome: 'Lucas Mendes',
    idade: 23,
    //método this
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever();