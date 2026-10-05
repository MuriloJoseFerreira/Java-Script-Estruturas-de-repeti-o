function lerNumero(mensagem) {
    const texto = prompt(mensagem);
    if (texto === null || texto.trim() === "") {
        return NaN;
    }
    return Number(texto.replace(",", "."));
}

function exercicio9() {
    let total = 0;
    let preco;

    do {
        preco = lerNumero("Digite o preço do produto (0 para finalizar):");

        while (isNaN(preco) || preco < 0) {
            preco = lerNumero("Preço inválido! Digite novamente (0 para finalizar):");
        }

        total += preco;
    } while (preco !== 0);

    alert("Total da compra: R$ " + total.toFixed(2));

    let pago = lerNumero("Digite o valor em dinheiro entregue pelo cliente:");

    while (isNaN(pago) || pago < total) {
        pago = lerNumero("Valor insuficiente! O total é R$ " + total.toFixed(2) + ". Digite o valor entregue:");
    }

    const troco = pago - total;
    alert("Troco: R$ " + troco.toFixed(2));
}

document.getElementById("executar").addEventListener("click", exercicio9);
