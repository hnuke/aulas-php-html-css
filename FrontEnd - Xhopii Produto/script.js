
function selecionarIMGProdutos(img){

    document.getElementById("imgPrincipal").src = img.src;
}

function mudarPreco(objeto){
    if (objeto.innerText == "Rosa" ){
        document.getElementById("precoProduto").innerText = "R$ 4953,19"
        document.getElementById("imgPrincipal").src = "img/produto5.png"
    }  
    


}