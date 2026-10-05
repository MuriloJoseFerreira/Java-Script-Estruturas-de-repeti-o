function exercicio2() {
    const senhaPadrao = "1234";
    const maximoTentativas = 3;
    let tentativas = 0;
    let acertou = false;

    while (tentativas < maximoTentativas) {
        const senha = prompt("Digite a senha:");

        if (senha === senhaPadrao) {
            acertou = true;
            break;
        }

        tentativas++;

        if (tentativas < maximoTentativas) {
            alert("Senha Incorreta, tente novamente");
        }
    }

    if (acertou) {
        alert("Acesso Permitido");
    } else {
        alert("Conta bloqueada por segurança!");
    }
}

document.getElementById("executar").addEventListener("click", exercicio2);
