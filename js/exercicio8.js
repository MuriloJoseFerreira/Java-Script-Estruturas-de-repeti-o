function lerNumero(mensagem) {
    const texto = prompt(mensagem);
    if (texto === null || texto.trim() === "") {
        return NaN;
    }
    return Number(texto.replace(",", "."));
}

function exercicio8() {
    let maior = 0;
    let menor = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = lerNumero("Digite o " + i + "º número:");

        while (isNaN(numero)) {
            numero = lerNumero("Valor inválido! Digite o " + i + "º número:");
        }

        if (i === 1) {
            maior = numero;
            menor = numero;
        } else {
            if (numero > maior) {
                maior = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        }
    }

    alert("Maior número: " + maior + "\nMenor número: " + menor);
}

document.getElementById("executar").addEventListener("click", exercicio8);
