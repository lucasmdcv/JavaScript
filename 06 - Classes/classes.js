//definir modelo de pessoa usando classe 
// Classe = definição do que deveria ser
class Pessoa{

    nome;
    idade;

    //o que acontece quando uma pessoa é instanciada 
    constructor(){
        this.nome = 'teste';
        this.idade = 23;
        this.anoDeNascimento = 2023 - this.idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
}

const Ana = new Pessoa('Ana', 25)
const Renan = new Pessoa('Renan', 30)

Ana.descrever();
Renan.descrever();

console.log(Ana)

