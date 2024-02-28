const minhaPromisse = new Promise((resolve,reject) =>{
    const sucesso = false

    if(sucesso){
        resolve("Deu bom!!" )
    }else{
        reject("Ocorreu um problema!")
    }

})

minhaPromisse
.then((resultado) =>{
    console.log("foi sucesso: "+ resultado)
})
.catch((erro)=>{
    console.log("Deu ruim: " + erro)
})