let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaPacotinhos(){
    let dias = Number(inputNumero.value);

    let pacotinhosPorMinuto = 0.5;
    
    let minutosPorDIa = 8 * 60;

    let TotalPacotinhos = pacotinhosPorMinuto * minutosPorDIa * dias;

    h2Resultado.innerHTML = "Foram vendidos em um dia " +TotalPacotinhos +" pacotinhos de pipoca."
}

btCalcular.onclick = function(){
    calculaPacotinhos();
}