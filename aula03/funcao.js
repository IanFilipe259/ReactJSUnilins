//Funcao(function) e Arrow Function(=>) no javascript
const calculo = function (valor){
    return valor * 3;
}
console.log(calculo(4));


//arrow function 
const calculo2 = (valor) => valor * 3;

console.log(calculo2(41))

//exemplo function
const oldWay = function(nome, apelido){
    return `Meu nome é ${apelido}, ${nome}`;
}
console.log(oldWay('James Bond', 'Bond'));

//arrow function
const newWay1 = (nome,apelido) => `Meu nome é ${apelido}, ${nome}`

console.log(newWay1('Zé Lelé', 'Lelé'));

//arrow function
const newWay2 = (nome,apelido) => `Meu nome é ${apelido}, ${nome}`

console.log(newWay2('Eu sou alguém', 'Coisa'));

//sem arrow function
const sandwich ={
    bread: 'Regular',
    cheese:'Ricota',

    prepare(){
        return `Eu quero um sanduiche com pão ${this.bread} e queijo ${this.cheese}`;
    },

    make(){
        const that = this;
        setTimeout(function(){
            console.log(that.prepare())
        }, 1000)
    }
    
}
sandwich.make();

//funcao COM arrow function
const paoflechado = {
    pao:'integral',
    queijo:'mussarela',
    preparar(){
       return `Eu quero um sanduiche com pão ${this.pao} e queijo ${this.queijo}`;
    },
    fazer(){
        setTimeout(  () => console.log(this.preparar()), 2000)}};

paoflechado.fazer();

//Array
const array01 = [1, 2, 3, 4, 5];
const calcArray01 = array01.map((item) => item * 2);
console.log(calcArray01);

const array02 = ['Joao', 'Maria', 'Ana', 'Jose', 'Antonio'];
const showArray02 = array02.map((item) => item);
console.log(showArray02);


//diferença entre VAR, LET e CONST
var exibeMsg = function(){
    var msgForaDoIF = 'varJavascript';
    if (msgForaDoIF =='varJavascript'){
        let msgDentroDoIF = 'letJavascript';
        console.log(msgDentroDoIF);
        console.log(msgForaDoIF);
    }
    //console.log(msgDentroDoIF); //não pode ser visualizado pois foi feito dentro do if.
    console.log(msgForaDoIF);
    return 'Var é visível dentro do escopo da função. Let é visível dentro do bloco if, e apenas no bloco que foi gerado.'
}

console.log(exibeMsg());
