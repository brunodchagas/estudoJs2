const shoppingCart = [];

function addItemCart(item){
    shoppingCart.push(item)
}

function removeItemCart(item){
    const index = shoppingCart.indexOf(item);
    if(index !== -1){
        shoppingCart.splice(index,1)
    }
}

function viewCart(){
    if(shoppingCart.length ==0){
        console.log("Seu carrinho esta vazio")
    }else{
        console.log("Itens no seu carrinho: ")
        for(let i = 0; i < shoppingCart.length;i++){
            console.log(`${i+1} - ${shoppingCart[i]}`)
        }
    }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log("Seu carrinho foi zerado")
}

addItemCart("tenis")
addItemCart("blusa")
addItemCart("short")

viewCart()

removeItemCart("blusa")

viewCart()

clearCart()

viewCart()
