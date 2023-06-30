let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaMeninos(){
    let vlr1 = Number(inputNumero.value);

    let meninas = vlr1 / 4;

    let meninos = vlr1 - meninas;

    h2Resultado.innerHTML = "O total de meninos na sala e: "+meninos.toFixed(0);
}

btCalcular.onclick = function(){
    calculaMeninos();
}