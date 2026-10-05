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

function exercicio4() {
    let limite = lerInteiro("Digite um número limite inteiro positivo:");

    while (limite <= 0) {
        limite = lerInteiro("O número deve ser positivo! Digite novamente:");
    }

    const impares = [];

    for (let i = 1; i <= limite; i += 2) {
        impares.push(i);
    }

    alert("Números ímpares de 1 até " + limite + ":\n" + impares.join(", "));
}

document.getElementById("executar").addEventListener("click", exercicio4);
