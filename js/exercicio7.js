function lerNumero(mensagem) {
    const texto = prompt(mensagem);
    if (texto === null || texto.trim() === "") {
        return NaN;
    }
    return Number(texto.replace(",", "."));
}

function exercicio7() {
    let soma = 0;
    let quantidade = 0;
    let continuar = true;

    while (continuar) {
        let idade = lerNumero("Digite uma idade:");

        while (isNaN(idade) || idade < 0 || idade > 120) {
            idade = lerNumero("Idade inválida! Digite novamente:");
        }

        soma += idade;
        quantidade++;

        continuar = confirm("Deseja cadastrar mais uma idade?");
    }

    const media = soma / quantidade;
    alert("Média das idades cadastradas: " + media.toFixed(2));
}

document.getElementById("executar").addEventListener("click", exercicio7);
