let inputNumero01 = document.querySelector("#inputNumero01");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularPecas(){
    let valor1 = Number (inputNumero01.value);

    let Calcular = valor1 + 2342;

    h2Resultado.innerHTML = "Total: "+ Calcular;
}

btCalcular.onclick = function(){
    calcularPecas();
}

