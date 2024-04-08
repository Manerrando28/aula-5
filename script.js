/*criar um algoritmo que leia uma lista e retorne duas lista novas lista */

let listaNumeros =[1,2,3,4,5,6,7,8,9];
let pares=[];
let impares=[];

for(let numero of listaNumeros){
if (numero % 2==0){
    pares.push(numero)
}else{
    impares.push(numero)
 }
}
console.log(pares);
console.log(impares);
/*com uma lista de alunos (objetos) vamos percorrer cada aluno e trazer a media do aluno e sua medida*/
const listaAlunos=[
    {nome:"Hunguinho",notas:[5,7]},
    {nome:"Zezinho",notas:[7,8]},
    {nome:"Luizinho",notas:[7,8]}
];

for(aluno of listaAlunos){
    let media =(aluno.notas[0] + aluno.notas [1])/2;
    console.log(`A media do aluno ${aluno.nome} e ${media}`);
  
}

// voce precisa desenvolver um algoritmo que faca um sorteio de um bingo*/

const sorteio =[];

while(sorteio.length <6){
    let numero1 =Math.ceil(Math.random()* 60)
            if(!sorteio.includes(numero1)){
                sorteio.push(numero1)
            }
       
    }
sorteio.sort((a,b)=>a-b);
console.log(sorteio);

//destribuicao

const usuario ={
    nome:"sao paulo",
    idade: 20
};

//sem desestruturacao
console.log(`nome e local: ${usuario.nome} ${usuario.local}`);

//com desestruturacao
let{nome,local}= usuario;
 console.log(`${nome} ${local}`);

 //arrow fuction

 let items=["fusca","belina","gurgel","brasilia","kombi"];
 items.forEach(function(items){
    console.log(items)
}) 
let items1=["fusca","belina","gurgel","brasilia","kombi"];
 items.forEach(items1 =>console.log(items1))