function lerNumero(mensagem) {
    const texto = prompt(mensagem);
    if (texto === null || texto.trim() === "") {
        return NaN;
    }
    return Number(texto.replace(",", "."));
}

function exercicio3() {
    let idade = lerNumero("Digite sua idade:");

    while (isNaN(idade) || idade < 0 || idade > 120) {
        idade = lerNumero("Idade inválida! Digite novamente:");
    }

    alert("Idade registrada: " + idade);
}

document.getElementById("executar").addEventListener("click", exercicio3);
