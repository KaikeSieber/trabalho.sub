let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaCombustivel(){
    let distancia = Number(inputNumero.value);

    let marcador = 1 / 4;
    let autonomia = 10;
    let capacidadeTanque = 100;

    let combustivelNecessario = (distancia / autonomia) - (marcador * capacidadeTanque);

    if(combustivelNecessario > 0){
        h2Resultado.innerHTML = "E necessario abastecer " +combustivelNecessario.toFixed(1) + " litros.";
    }else{
        h2Resultado.innerHTML = "Voce tem combustivel suficiente."
    }

}

btCalcular.onclick = function(){
    calculaCombustivel();
}