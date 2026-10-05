function exercicio1() {
    const senhaPadrao = "1234";
    let senha = prompt("Digite a senha:");

    while (senha !== senhaPadrao) {
        if (senha === null) {
            return;
        }
        alert("Senha Incorreta, tente novamente");
        senha = prompt("Digite a senha:");
    }

    alert("Acesso Permitido");
}

document.getElementById("executar").addEventListener("click", exercicio1);
