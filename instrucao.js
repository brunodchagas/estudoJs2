var pais = "Brasil";

if (pais !="Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro");
}

var idade = 22;

if(idade < 16){
    console.log("não vota");
}else if(idade < 18 || idade > 65){
    crossOriginIsolated.log("voto é opcional");
}else{
    console.log("voto obrigatorio");
}

var expr = "Uva";

switch (expr){
    case "Laranja":
        console.log("As Laranjas custam R$ 0,59 o quilo");
        break
    case "Banana":
        console.log("As Bananas custam R$ 0,48 o quilo");
        break;
        default:
        console.log("Desculpe, estamos sem nehuma "+ expr + ".");

}
console.log("Tem algo mais que você gostaria de levar ?");

var diaSem = 4;

switch(diaSem){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
        default:
        console.log("Esse dua da semana nao existe");        
}
