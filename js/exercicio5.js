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

function exercicio5() {
    let numero = lerInteiro("Digite um número inteiro inicial:");

    while (numero < 0) {
        numero = lerInteiro("O número não pode ser negativo! Digite novamente:");
    }

    for (let i = numero; i >= 0; i--) {
        alert(i + "...");
    }

    alert("Decolar!");
}

document.getElementById("executar").addEventListener("click", exercicio5);
