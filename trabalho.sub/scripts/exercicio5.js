let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaTroco(){
    let dinheiro = Number(inputNumero.value);

    let arroz = 14.40
    let feijao =  7.30
    let tomates = 3.50
    let batatas = 4.75

    let total = (3 * arroz) + (2 * feijao) + (2 * tomates) + (3 * batatas);
    
    let troco = dinheiro - total;

    h2Resultado.innerHTML = "O troco deve ser de: R$ " +troco.toFixed(2);
}

btCalcular.onclick = function(){
    calculaTroco();
}