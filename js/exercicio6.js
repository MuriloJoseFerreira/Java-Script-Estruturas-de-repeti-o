function lerNumero(mensagem) {
    const texto = prompt(mensagem);
    if (texto === null || texto.trim() === "") {
        return NaN;
    }
    return Number(texto.replace(",", "."));
}

function lerInteiro(mensagem) {
    let numero = lerNumero(mensagem);
    while (!Number.isInteger(numero)) {
        numero = lerNumero("Valor inválido! " + mensagem);
    }
    return numero;
}

function exercicio6() {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 6; i++) {
        const numero = lerInteiro("Digite o " + i + "º número inteiro:");

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    alert("Quantidade de números pares: " + pares + "\nQuantidade de números ímpares: " + impares);
}

document.getElementById("executar").addEventListener("click", exercicio6);
