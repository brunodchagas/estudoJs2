var bebida = "Café";

switch(bebida){
    case "Leite":
        console.log("O valor do Leite é de R$ 10,00");
        break;
    case "Café":
        console.log("O valor da Café é de R$ 15,00");
        break;
    case "Chá":
        console.log("O valor da chá é de R$ 10,00");
        break;    
        default:
        console.log("A escolha deve ser feita entre café, leite ou chá");        
}
console.log("Tem algo mais que você gostaria de pedir?")